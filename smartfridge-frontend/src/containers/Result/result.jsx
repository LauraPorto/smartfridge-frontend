import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Media } from 'reactstrap';

import Header from '../../components/Header/header';

import { connect } from 'react-redux';
import {SAVE} from '../../redux/types/recipeType';

const Result = (props) => {

    

    // const getRecipeDetails = async () => {
    //     let id = props.id;
        

    //     const recipeInfo = await axios.get('https://api.spoonacular.com/recipes/{id}/information&includeNutrition=true');
    //     props.dispatch({type: SAVE, payload: recipeInfo.data});
    //     //Onclick para cada resultado
    // }


    return (
        <div>
            <div className="header-div"> <Header/> </div>
            <div className="main-store">
                <Media>
                    <Media left top href="/RecipeInfo" > 
                    <Media object src='' alt="Recipe Image" className="img-recipe-result" />
                    </Media>
                    <Media body className="body-recipe-result">
                    <Media heading className="heading-recipe-result">
                        {/* {props.title}  */}
                    </Media>
                    Info general de la receta (ingredientes que faltan, ingredientes).
                        {/* {props.missedIngredients.name} */}
                    </Media>
                </Media>
                <Media>
                    <Media left top href="/RecipeInfo"> 
                    <Media object data-src="holder.js/64x64" alt="Recipe Image" className="img-recipe-result" />
                    </Media>
                    <Media body className="body-recipe-result">
                    <Media heading className="heading-recipe-result">
                        Título de la receta
                    </Media>
                    Info general de la receta (ingredientes que faltan, ingredientes).
                    </Media>
                </Media>
                <Media>
                    <Media left top href="/RecipeInfo"> 
                    <Media object data-src="holder.js/64x64" alt="Recipe Image" className="img-recipe-result" />
                    </Media>
                    <Media body className="body-recipe-result">
                    <Media heading className="heading-recipe-result">
                        Título de la receta
                    </Media>
                    Info general de la receta (ingredientes que faltan, ingredientes).
                    </Media>
                </Media>
                <Media>
                    <Media left top href="/RecipeInfo"> 
                    <Media object data-src="holder.js/64x64" alt="Recipe Image" className="img-recipe-result" />
                    </Media>
                    <Media body className="body-recipe-result">
                    <Media heading className="heading-recipe-result">
                        Título de la receta
                    </Media>
                    Info general de la receta (ingredientes que faltan, ingredientes).
                    </Media>
                </Media>
            </div>          
        </div>
    )
}

//Recibimos por redux los datos de mi store, donde guardamos los ingredientes
// const mapStateToProps = (state) => {
//     return {
//         recipeData: state.recipeReducer
//     }
// }
// const mapDispatchToProps = (state) => {
//     return {
//         recipeDetails: state.recipeReducer
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Result);
export default Result;
/*
Datos para sacar por pantalla: 
recipeResult.tittle
recipeResult.image
recipeResult.missedIngredients.name

*/
