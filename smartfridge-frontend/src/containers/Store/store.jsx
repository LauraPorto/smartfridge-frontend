import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Search from '../../components/Search/search';
import Header from '../../components/Header/header';
import Ingredient from '../../components/Ingredient/ingredient';

import kitchen from '../../assets/kitchen.jpeg';

import { SAVE } from '../../redux/types/recipeType';
import { connect } from 'react-redux';


const Store = (props) => {

    const history = useHistory();

    // const [list, setList] = useState({
    //     myIngredients: []
    // });

    // const selectIngredient = () => {

    //     //Añadir al array list el elemento seleccionado mediante onClick
    //     //setList(list); //

    // }
 
    const ingredients = props.myIngredients.myIngredients;

    console.log(props.myIngredients.myIngredients, 'props');

    const getRecipes = async () => {
        // const recipeData = await axios.get('https://api.spoonacular.com/recipes/findByIngredients?apiKey=d6e877dd55e74b919c1cf042e3e465bb&ingredients=cheese');
        //APIKEY y props.myIngredients[]

        //setRecipeResult(recipeData.data);

        // props.dispatch({type: SAVE, payload: recipeData.data});

        // console.log(recipeData.data, 'reciperesult');
        // console.log(recipeData.data[1], 'numero 1');

        return setTimeout(() => {
            history.push('/result');
        }, 300);

    };

    const selectIngredient = () => {
        
    }


    return (
        <div className="main-store">
            <div className="header-div"> <Header/> </div>
            <div className="search-store-container">
                <Search/>
            </div>
            <div className="body-store">
                <div className="store-fridge">
                    <img src={kitchen} style={{maxWidth: '100%', width: 'auto', height: '33em'}}></img>
                    <div className="fridge-menu">
                        <button>boton para borrrar</button>
                        <button>boton para añadir</button>
                    </div>
                </div>
                <div className="my-products-store">
                    My Fridge
                    
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
// export default Store;