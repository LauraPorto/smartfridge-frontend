import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer/footer';
import vegetables3 from '../../assets/vegetables3.jpg';
import brigitte from '../../assets/brigitte.jpg';
import pasta from '../../assets/pasta.jpg';

import {SAVE} from '../../redux/types/recipeType';
import {connect} from 'react-redux';

const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';

const Explore = (props) => {

  const history = useHistory();

  console.log(props, 'estas son las props');

    const getRandom = async () => {

      
      const random = await axios.get(`https://api.spoonacular.com/recipes/random${apiKey}`);

      //props.dispatch({type: SAVE, payload: ''})

    };

    const getVegan = async () => {
      const vegan = await axios.get(`https://api.spoonacular.com/recipes/random${apiKey}`)

      //props.dispatch({type: SAVE, payload: ''})
    }

  

    return (
        <div className="explore-main-container">
            <div className="explore-container-img">

            </div>
            <div className="footer-container">
                <Footer/>
            </div>
            
        </div>

    )
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer
  }
}

export default connect(mapStateToProps)(Explore);
