import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

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
                    <img src={recipeDetails.image} style={{width: '100%', height: '30em'}}></img>
                </div>
                <div className="tittle-recipe-info">
                    <h1>{recipeDetails.title}</h1>
                    <Like/>
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
                            
                        </div>
                    </div>
                    <div className="recipe-instruction">
                                            
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
