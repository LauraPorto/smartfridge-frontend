import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


import Header from '../../components/Header/header';

import { connect } from 'react-redux';
import {SAVE_DETAILS} from '../../redux/types/recipeType';

const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';
const query = '&ingredients=';

const Result = (props) => {

    console.log(props, 'esto son PROPS');
    console.log(props.recipeData, 'esto es recipe.data')

    const history = useHistory();
    const recipes = props.recipeData.recipeData;
    console.log(recipes, 'this is recipes');
    // const missedIngredients = recipes.missedIngredients;
    // console.log(missedIngredients);

    
    const getRecipeInfo = async () => {

        let id = props.recipeData.id;
        console.log(id, 'this is id');
        // const recipeInfo = await axios.get(`https://api.spoonacular.com/recipes/id/information${apiKey}&includeNutrition=true`);
        // props.dispatch({type: SAVE_DETAILS, payload: recipeInfo.data});

    }
   
    return (
        <div>
            <div className="header-div"> <Header/> </div>
            <div className="main-store">

                <div className="body-results">
                    {
                        recipes.map(recipe => 
                            <div className="map-recipes" onClick={() => getRecipeInfo()}>
                                <div className = "map-recipes-header">
                                    {recipe.title}
                                    <img src={recipe.image} style={{maxWidth: '100%', width: '18em', height: '15em'}} />
                                </div>
                             
                            </div>
                        )
                    }
                </div>

            </div>          
        </div>
    )
}

//Recibimos por redux los datos de mi store, donde guardamos los ingredientes
const mapStateToProps = (state) => {
    return {
        recipeData: state.recipeReducer
    }
}

export default connect(mapStateToProps)(Result);

