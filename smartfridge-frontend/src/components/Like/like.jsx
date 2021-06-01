import React, {useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';


const Like = (props) => {

    const recipe = props.recipeDetails.recipeDetails;

    const user = props.user.user;

    const [like, setLiked] = useState({
        liked: false
    });

    const [codeRecipe, setCodeRecipe] = useState({
        apiId: recipe.id,
        title: recipe.title, 
        userId: user._id
    });


    const toggle = () => {
        let likeRecipe = like.liked;
        likeRecipe = !likeRecipe;
        setLiked({liked: likeRecipe})
    }

    const saveRecipe = async () => {
        toggle();

        let result =  await axios.post('http://localhost:5000/store/', codeRecipe);

        alert('Recipe saved in Favorites');
    };

    const deleteRecipe = async () => {
        toggle();

        let result =  await axios.delete('http://localhost:5000/store/', codeRecipe);
        alert('Recipe deleted');
    }

    return (
        <div className="main-like" style={{width: '8em' ,display: 'flex', flexDirectioin: 'row'}}>
            {
                like.liked === false ? 
                    <div className="like-container">
                        <FontAwesomeIcon 
                            icon={faHeart} 
                            style={{color: 'grey', width: '2em', height: '2em'}}
                            onClick={() => saveRecipe()}
                        />
                    </div>
                : 
                    <div className="like-container">
                        <FontAwesomeIcon 
                            icon={faHeart} 
                            style={{color: 'red', width: '2em', height: '2em'}}
                            onClick={() => deleteRecipe()}
                        />
                    </div>
            }
            <div className="empty-div" style={{width: '3em'}}></div>
            <FontAwesomeIcon
                icon={faShareSquare}
                style={{color: 'black', width: '2em', height: '2em'}}
            />
        </div>
    )
}

//Recibimos por redux los datos de mi store, donde guardamos los datos principales de las recetas favoritas
const mapStateToProps = (state) => {
    return {
        recipeDetails: state.recipeReducer, 
        user: state.userReducer
    }
}

export default connect(mapStateToProps)(Like);
