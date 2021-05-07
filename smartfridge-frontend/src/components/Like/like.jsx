import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';


const Like = (props) => {

    const [like, setLiked] = useState({
        liked: false
    });

    console.log(like.liked, 'this is the like value');

    const toggle = () => {
        let likeRecipe = like.liked;
        likeRecipe = !likeRecipe;
        setLiked({liked: likeRecipe})
    }

    const saveRecipe = () => {

    }

    const deleteRecipe = () => {

    }

    return (
        <div className="main-like">
            {
                like.liked === false ? 
                    <div className="like-container">
                        <FontAwesomeIcon 
                            icon={faHeart} 
                            style={{color: 'grey', width: '2em', height: '2em'}}
                            onClick={() => toggle()}
                        />
                    </div>
                : 
                    <div className="like-container">
                        <FontAwesomeIcon 
                            icon={faHeart} 
                            style={{color: 'red', width: '2em', height: '2em'}}
                            onClick={() => toggle()}
                        />
                    </div>
            }
        
        </div>
    )
}

//Recibimos por redux los datos de mi store, donde guardamos los datos principales de las recetas favoritas
const mapStateToProps = (state) => {
    return {
        favorites: state.recipeReducer
    }
}

export default connect(mapStateToProps)(Like);
