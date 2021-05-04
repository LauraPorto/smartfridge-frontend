import React, {useState, useEffect} from 'react';

import Header from '../../components/Header/header';
import Recipe from '../../components/Recipe/recipe';
//Traemos de redux el id de la receta para mostrar sus detalles

const RecipeInfo = (props) => {

    useEffect(() => {
        
        // const result = axios.get('GET RECIPE DETAILS')

        return () => {
            
        }
    }, [])


    return (
        <div className="main-recipe-info">
            <div className="body-recipe-info">
                <div className="img-recipe-info">

                </div>
                <div className="tittle-recipe-info">
                    <h1>Título de la receta</h1>
                </div>
                <div className="recipe-info-data">
                    <div className="info1">

                    </div>
                    <div className="info2">

                    </div>
                    <div className="info-special">
                        <div className="info-icons">

                        </div>
                        <div className="info-icons-text">

                        </div>
                    </div>
                    <div className="more-ingredients">
                        <div className="extended-ingredients">

                        </div>
                    </div>
                    <div className="recipe-instruction">
                        <Recipe/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeInfo;
