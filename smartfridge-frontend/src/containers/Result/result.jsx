import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Media } from 'reactstrap';

import Header from '../../components/Header/header';

import { connect } from 'react-redux';
import { SAVE } from '../../redux/types/recipeType';


const Result = (props) => {

    const [recipeResult, setRecipeResult] = useState({});

    // //Cuando el componente se monte, llamamos a la api para que nos traiga los resultados se la búsqueda realizada con los ingredientes señalados en Store (que pasamos por redux)
    // useEffect(() => {
    //    getRecipes();
    // }, [])

    const getRecipes = async () => {
        const recipeData = await axios.get('https://api.spoonacular.com/recipes/findByIngredients?apiKey=d6e877dd55e74b919c1cf042e3e465bb&ingredients=apple');
        //APIKEY y props.myIngredients[]

        setRecipeResult(recipeData.data);

        props.dispatch({type: SAVE, payload: recipeData.data});

        console.log(recipeData.data, 'reciperesult');
        console.log(recipeData.data[1], 'numero 1')
        console.log(recipeResult.data, 'esto es recipe.result');
    };


    return (
        <div>
            <div className="header-div"> <Header/> </div>
            <div className="main-store">
                <Media>
                    <Media left top href="/RecipeInfo"> 
                    <Media object src='' alt="Recipe Image" className="img-recipe-result" />
                    </Media>
                    <Media body className="body-recipe-result">
                    <Media heading className="heading-recipe-result">
                        {/* {recipeResult[0].title}  */}
                    </Media>
                    Info general de la receta (ingredientes que faltan, ingredientes).
                    {/* {recipeResult[0].missedIngredients.name} */}
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
                <button onClick={() => getRecipes()}>RECIPES</button>
            </div>          
        </div>
    )
}

// //Recibimos por redux los datos de mi store, donde guardamos los ingredientes
// const mapStateToProps = (state) => {
//     return {
//         myIngredients: state.recipeReducer
//     }
// }

export default connect()(Result);

/*
Datos para sacar por pantalla: 
recipeResult.tittle
recipeResult.image
recipeResult.missedIngredients.name

*/
