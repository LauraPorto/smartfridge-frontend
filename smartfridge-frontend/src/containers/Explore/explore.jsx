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

  console.log(props.user.user, 'estas son las props');

    const getRandom = async () => {

      const random = await axios.get(`https://api.spoonacular.com/recipes/random${apiKey}`)

      const recipes = random.data.recipes;
      console.log(recipes, 'this is random');

      props.dispatch({type: SAVE, payload: recipes});
      history.push('/result');

    };

    const getVegan = async () => {
      const vegan = await axios.get(`https://api.spoonacular.com/recipes/complexSearch${apiKey}&diet=vegan`);

      const recipes = vegan.data.results;
      console.log(recipes, 'this is vegan');

      props.dispatch({type: SAVE, payload: recipes});
      history.push('/result');
    }

    const getGlutenFree = async () => {
      const gluten = await axios.get(`https://api.spoonacular.com/recipes/complexSearch${apiKey}&intolerances=gluten`);

      const recipes = gluten.data.results;
      console.log(recipes, 'this is gluten');
      props.dispatch({type: SAVE, payload: recipes})
      history.push('/result');
    }

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
    user: state.userReducer
  }
}

export default connect(mapStateToProps)(Explore);
