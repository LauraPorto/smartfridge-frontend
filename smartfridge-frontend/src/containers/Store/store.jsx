import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Search from '../../components/Search/search';
import Header from '../../components/Header/header';


import kitchen from '../../assets/kitchen.jpeg';

import { SAVE, SEARCH_FOOD } from '../../redux/types/recipeType';
import { connect } from 'react-redux';

const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';
const query = '&ingredients=';

const Store = (props) => {

    const history = useHistory();
    const ingredients = props.myIngredients.myIngredients;


    //Hooks para hacer la lista de ingredientes
    const [list, setList] = useState({
        myIngredients: []
    });
 

    const selectIngredient = ({ingredient}) => {

        const mapIngredients = ingredients.filter(ingredient => {
            return ingredient.name, ingredient.id
        })

        console.log(ingredient.id, 'esto es el id');

        const listRecipe = list.myIngredients.push(ingredient.name);

        console.log(list.myIngredients, 'lista para las recetas');
        console.log(listRecipe, 'listercipe');

        props.dispatch({type: SEARCH_FOOD, payload: ingredient.id});
    };

    console.log(list.myIngredients, '58 listmyingredients');

    
    const getRecipes = async () => {
        const recipeData = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients${apiKey}${query}${list.myIngredients}`);

        props.dispatch({type: SAVE, payload: recipeData.data});

        return setTimeout(() => {
            history.push('/result');
        }, 500);

    };

    const getFoodInfo = async ({ingredient}) => {
        const mapIngredients = ingredients.filter(ingredient => {
            return ingredient.id
        })
        console.log(ingredient.id, 'ingredient.id')
        const id = ingredient.id;
        // https://api.spoonacular.com/food/ingredients/9266/information?amount=1
        const foodInfo = await axios.get(`https://api.spoonacular.com/food/ingredients/${id}/information${apiKey}`);
        console.log(foodInfo, 'esto es food info')
        props.dispatch({type: SEARCH_FOOD, payload: foodInfo});

        return setTimeout(() => {
            history.push('/explore');
        }, 500);
    };


    return (
        <div className="main-store">
            <div className="header-div"> <Header/> </div>
           
            <div className="body-store">
                <div className="store-fridge">
                    <img src={kitchen} style={{maxWidth: '100%', width: 'auto', height: '33em'}}></img>
                    <div className="fridge-menu">
                        <button>boton para borrrar</button>
                        <button>boton para añadir</button>
                        <div className="search-store-container">
                            <Search/>
                        </div>
                    </div>
                </div>
                <div className="my-products-store">
                    <div className="selected-ingredients">
                        Mis elementos seleccionados
                    </div>
                    
                    <div className="ingredient-container">
                        {
                            ingredients.map(ingredient => 
                                <div >
                                    <div className = "map-ingredient" onClick={() => selectIngredient({ingredient})}>
                                        {ingredient.name}
                                    </div>
                                    <img className="map-image" src={ingredient.image}/>
                                    <button onClick={() => getFoodInfo({ingredient})}>FOOD INFO</button>
                                </div>
                            )
                        }
                    </div>
                </div>
                         
            </div>
            <button onClick={() => getRecipes()}></button>
 
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myIngredients: state.recipeReducer
    }
}


export default connect(mapStateToProps)(Store);
