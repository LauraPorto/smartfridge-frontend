import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Like = () => {

    const [like, setLiked] = useState({
        liked: false
    });
    console.log(like.liked, 'this is the like value');

    const toggle = () => {
        let likeRecipe = like.liked;
        likeRecipe = !likeRecipe;
        setLiked({liked: likeRecipe})

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

export default Like;
