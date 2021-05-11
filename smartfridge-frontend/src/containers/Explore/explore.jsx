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
  const user = props.user;

    const getRandom = async () => {

      if(user.token === ''){
        history.push('/register')
      }else{
        const random = await axios.get(`https://api.spoonacular.com/recipes/random${apiKey}`)
        const recipes = random.data.recipes;
        props.dispatch({type: SAVE, payload: recipes});
        history.push('/result');
      }      
    };

    const getVegan = async () => {

      if(user.token === ''){
        history.push('/register')
      }else{
        const vegan = await axios.get(`https://api.spoonacular.com/recipes/complexSearch${apiKey}&diet=vegan`);

        const recipes = vegan.data.results;
        props.dispatch({type: SAVE, payload: recipes});
        history.push('/result');
      }
    };

    const getGlutenFree = async () => {

      if(user.token === ''){
        history.push('/register')
      }else{
        const gluten = await axios.get(`https://api.spoonacular.com/recipes/complexSearch${apiKey}&intolerances=gluten`);

        const recipes = gluten.data.results;
        props.dispatch({type: SAVE, payload: recipes})
        history.push('/result');
      }
 
    };

    return (
        <div className="explore-main-container">
            <div className="explore-container-img">
                <div className="img-exp" onClick={() => getRandom()}>
                  <img src={pasta} style={{width: '100%', height: '25em'}}></img>
                </div>
                <div className="img-exp" onClick={() => getVegan()}>
                  <img src={pasta} style={{width: '100%', height: '25em'}}></img>
                </div>
                <div className="img-exp" onClick={() => getGlutenFree()}>
                  <img src={pasta} style={{width: '100%', height: '25em'}}></img>
                </div>
            </div>
            <div className="footer-container">
                <Footer/>
            </div>
            
        </div>

    )
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer, 
    token: state.userReducer
  }
}

export default connect(mapStateToProps)(Explore);
