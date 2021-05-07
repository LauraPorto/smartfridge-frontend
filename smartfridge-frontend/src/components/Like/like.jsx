import React, {useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';


const Like = (props) => {

    const [like, setLiked] = useState({
        liked: false
    });

    const [codeRecipe, setCodeRecipe] = useState({
        apiId: '',
        name: ''
    });

    console.log(like.liked, 'this is the like value');

    const toggle = () => {
        let likeRecipe = like.liked;
        likeRecipe = !likeRecipe;
        setLiked({liked: likeRecipe})
    }

    const saveRecipe = async () => {
        toggle();

        let result =  await axios.post('http://localhost:3001/store/', codeRecipe);
        alert('receta guardada en favoritos');
    };

    const deleteRecipe = async () => {
        toggle();

        let result =  await axios.delete('http://localhost:3001/store/', codeRecipe);
        alert('receta borrada de favoritos');
    }

    return (
        <div className="main-like" style={{width: '8em' ,display: 'flex', flexDirectioin: 'row'}}>
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
        favorites: state.recipeReducer
    }
}

export default connect(mapStateToProps)(Like);
