import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import { connect } from 'react-redux';
import {SAVE_DETAILS} from '../../redux/types/recipeType';

const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';


const Result = (props) => {

    const history = useHistory();

    useEffect(() => {
        
        let token = props.user.token;

        if(token === ''){
            history.push('/')
        }
    }, [])

    const recipes = props.recipeData;
 
    
    const getRecipeInfo = async ({recipe}) => {
 
        recipes.filter(recipe => {
            
            return recipe.id
        });

        let id = recipe.id;
        console.log(id, 'id de la receta');
    
        const recipeInfo = await axios.get(`https://api.spoonacular.com/recipes/${id}/information${apiKey}&includeNutrition=true`);
        props.dispatch({type: SAVE_DETAILS, payload: recipeInfo.data});

        return setTimeout(() => {
            history.push('/recipe-info');
        }, 500);
    };
   
    return (
        <div>
            <div className="main-store">
                <div className="empty-div-result"></div>
                <div className="body-results">
                    {
                        recipes.map(recipe => 
                            <div className="map-recipes" onClick={() => getRecipeInfo({recipe})}>
                                <div className = "map-recipes-header">
                                    <img src={recipe.image} style={{maxWidth: '100%', width: '18em', height: '15em'}} />
                                </div>
                                <div className="map-recipes-title">
                                    <h4>{recipe.title}</h4>
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
        recipeData: state.recipeReducer.recipeData, 
        user: state.userReducer
    }
}

export default connect(mapStateToProps)(Result);

