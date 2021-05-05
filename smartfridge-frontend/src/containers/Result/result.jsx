import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Media } from 'reactstrap';

import Header from '../../components/Header/header';

import { connect } from 'react-redux';
import {SAVE_DETAILS} from '../../redux/types/recipeType';

const Result = (props) => {

    console.log(props, 'esto son PROPS');
    console.log(props.recipeData, 'esto es recipe.data')

    const recipe = props.recipeData.recipeData;

    
    const getRecipeInfo = async () => {

        const id = recipe[0].id;
        console.log(id, 'esto es el id del plato');
        console.log(props, 'props');

        const recipeInfo = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=d6e877dd55e74b919c1cf042e3e465bb&includeNutrition=true`);
        props.dispatch({type: SAVE_DETAILS, payload: recipeInfo.data});

    }
    
    
        //Onclick para cada resultado
    


    return (
        <div>
            <div className="header-div"> <Header/> </div>
            <div className="main-store">
            
                <Media>
                    {/* <Media left top href="/RecipeInfo" >  */}
                    <Media object src={recipe[1].image} alt="Recipe Image" className="img-recipe-result" onClick={() => getRecipeInfo()}/>
                    </Media>
                    <Media body className="body-recipe-result">
                    <Media heading className="heading-recipe-result">
                        {recipe[1].title} 
                    </Media>
                    Info general de la receta (ingredientes que faltan, ingredientes).
                        {/* {recipe[1].missedIngredients} */}
                    {/* </Media> */}
                </Media>
                <Media>
                    <Media left top href="/RecipeInfo"> 
                    <Media object data-src="holder.js/64x64" alt="Recipe Image" className="img-recipe-result" />
                    </Media>
                    <Media body className="body-recipe-result">
                    <Media heading className="heading-recipe-result">
                        {/* {recipe.title} */}
                        {props.recipeData.recipeData.title}
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
const mapStateToProps = (state) => {
    return {
        recipeData: state.recipeReducer
    }
}


export default connect(mapStateToProps)(Result);

