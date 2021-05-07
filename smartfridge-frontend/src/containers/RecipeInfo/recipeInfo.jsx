import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from '../../components/Header/header';
import Recipe from '../../components/Recipe/recipe';
import Like from '../../components/Like/like';

import {connect} from 'react-redux';
//Traemos de redux el id de la receta para mostrar sus detalles

const RecipeInfo = (props) => {

    const recipeDetails = props.recipeDetails.recipeDetails;
    console.log(recipeDetails, 'detalles de la receta')


    console.log(props, 'estas son las props');


    return (
        <div className="main-recipe-info">
            <div className="header-div"> <Header/> </div>
            <div className="body-recipe-info">
                <div className="img-recipe-info">
                    {recipeDetails.image}
                </div>
                <div className="tittle-recipe-info">
                    <h1>{recipeDetails.title}</h1>
                </div>
                <div className="recipe-info-data">
                    <div className="info1">
                        Servings: {recipeDetails.servings}
                    </div>
                    <div className="info2">
                        readyInMinutes: {recipeDetails.readyInMinutes}
                    </div>
                    <div className="info2">
                        Price aprox per serving: {recipeDetails.pricePerServing}
                    </div>
                    <div className="info-special">
                        <div className="info-icons">
                            Iconos (gluten, lactosa)
                        </div>
                        <div className="info-icons-text">
                            Diets: {recipeDetails.diets}
                        </div>
                    </div>
                    <div className="more-ingredients">
                        <div className="extended-ingredients">
                            Algunos ingredientes para añadir
                            <Like/>
                        </div>
                    </div>
                    <div className="recipe-instruction">
                        Collapse que muestra las instrucciones
                        <Recipe />
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        recipeDetails: state.recipeReducer
    }
}

export default connect(mapStateToProps)(RecipeInfo);
