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
    const nutritions = recipeDetails.nutrition;
    const extendedIngredients = recipeDetails.extendedIngredients;
    const diets = recipeDetails.diets;
 

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
                <div className="container">
                    <div class="row">
                        <div class="col-4">
                            <div className="info info-1">
                                <div>
                                For {recipeDetails.servings} servings
                                </div>
                                <div>
                                Ready in {recipeDetails.readyInMinutes} minutes
                                </div>
                                <div>
                                  Price aprox per serving: {recipeDetails.pricePerServing}
                                </div>
                            </div>
                            <div className="info info-2">
                                <div className="nutrition-info">
                                    <div>
                                        percentCarbs: {nutritions.caloricBreakdown.percentCarbs}
                                    </div>
                                    <div>
                                        percentFat: {nutritions.caloricBreakdown.percentFat}
                                    </div>
                                    <div>
                                        percentProtein: {nutritions.caloricBreakdown.percentProtein}
                                    </div>
                                </div>
                            </div>
                            <div className="info info-3">
                                {
                                    diets.map(diet => 
                                        <div className="map-diet">
                                            Diets: {diets}
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div class="col-8">
                            <div className=" ing ingredients-used"><h2>ORIGINAL INGREDIENTS</h2>
                                {
                                    nutritions.ingredients.map(ingredient => 
                                        <div className="maps">                                          
                                            <div className="map-used-name">
                                                {ingredient.name}
                                            </div>
                                            <div className="map-used-units">
                                                {ingredient.amount} {ingredient.unit}
                                            </div>
                                        </div>                                       
                                    )
                                }
                            </div>
                            <div className="ing ingredients-extend"><h2>EXTENDED INGREDIENTS</h2>
                                {
                                    extendedIngredients.map(ingredient => 
                                        <div className="maps">
                                            <div className="map-extended">   
                                                {ingredient.original}
                                            </div>
                                        </div>                                       
                                    )
                                }
                            </div>
                            <div className="more-nutrients">¿QUIERES MÁS INFORMACIÓN DE LOS INGREDIENTES?</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="analized-recipe">
                            {recipeDetails.instructions}
                        </div>
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
