import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';


import Recipe from '../../components/Recipe/recipe';
import Like from '../../components/Like/like';

import {connect} from 'react-redux';



const RecipeInfo = (props) => {

    const history = useHistory();

    useEffect(() => {

        let token = props.user.token;
        console.log(token, 'esto es el token');

        if(token === ''){
            history.push('/')
        }
    }, [])

    const recipeDetails = props.recipeDetails.recipeDetails;
    console.log(recipeDetails, 'detalles de la receta')


    console.log(props, 'estas son las props');


    return (
        <div className="main-recipe-info">
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
        recipeDetails: state.recipeReducer,
        user: state.userReducer
    }
}

export default connect(mapStateToProps)(RecipeInfo);
