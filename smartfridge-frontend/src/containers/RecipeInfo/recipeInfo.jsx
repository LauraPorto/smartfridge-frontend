import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from '../../components/Header/header';
import Recipe from '../../components/Recipe/recipe';

import {connect} from 'react-redux';
//Traemos de redux el id de la receta para mostrar sus detalles

const RecipeInfo = (props) => {




    console.log(props, 'estas son las props');

    // //Cuando el componente se monte, llamamos a la api para que nos traiga la información detallada de la receta seleccionada mediante su ID (que nos hemos traído por redux)
    // useEffect(() => {
    //    getRecipeInfo();
    // }, [])

    // const getRecipeInfo = async () => {
    //     const recipeInfo = await axios.get (https://api.spoonacular.com/recipes/{id}/analyzedInstructions);
    //     //Sacamos el ID de las props, que mediante redux nos han traído los datos de la receta seleccionada
    // }



    return (
        <div className="main-recipe-info">
            <div className="header-div"> <Header/> </div>
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
                        <Recipe />
                    </div>
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         recipeDetails: state.recipeReducer
//     }
// }

// export default connect(mapStateToProps)(RecipeInfo);
export default RecipeInfo;