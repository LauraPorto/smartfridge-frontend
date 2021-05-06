import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Search from '../../components/Search/search';
import Header from '../../components/Header/header';


import kitchen from '../../assets/kitchen.jpeg';

import { SAVE } from '../../redux/types/recipeType';
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
 
    
    const getRecipes = async () => {
        const recipeData = await axios.get(`https://api.spoonacular.com/recipes/findByIngredients${apiKey}${query}cheese`);
        //APIKEY y props.myIngredients[]

        props.dispatch({type: SAVE, payload: recipeData.data});

        return setTimeout(() => {
            history.push('/result');
        }, 500);

    };

    const selectIngredient = () => {
        // const listRecipe = list.myIngredients.push(ingredients.name);

        // console.log(list.myIngredients, 'lista para las recetas');

        // setList(list.myIngredients.push(ingredients.name));
        // console.log(list.myIngredients);
    }


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
                                <div onClick={() => selectIngredient()}>
                                    <div className = "map-ingredient">
                                        {ingredient.name}
                                    </div>
                                    <img className="map-image" src={ingredient.image}/>
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
