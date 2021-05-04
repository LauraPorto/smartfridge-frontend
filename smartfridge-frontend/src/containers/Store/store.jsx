import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Search from '../../components/Search/search';
import Header from '../../components/Header/header';
import Ingredient from '../../components/Ingredient/ingredient';

import { SAVE } from '../../redux/types/recipeType';
import { connect } from 'react-redux';


const Store = (props) => {

    const history = useHistory();
    const [recipeResult, setRecipeResult] = useState({});

    const [list, setList] = useState([]);

    // const selectIngredient = () => {

    //     //Añadir al array list el elemento seleccionado mediante onClick
    //     //setList(list); //

    // }

    // //Llamada axios a BBDD -> guardado en Redux -> llamado para la llamada a la API (result).
    // const setIngredients = () => {
    //     const store = axios.put('http://localhost:3001/store/')
    // }
    // const getIngredients = () => {
    //     const store = axios.get('http://localhost:3001/store/')
    // }

    // const getRecipes = async () => {
    //     const recipeData = await axios.get('https://api.spoonacular.com/recipes/findByIngredients?apiKey=d6e877dd55e74b919c1cf042e3e465bb&ingredients=apple');
    //     //APIKEY y props.myIngredients[]

    //     setRecipeResult(recipeData.data);

    //     props.dispatch({type: SAVE, payload: recipeData.data});

    //     console.log(recipeData.data, 'reciperesult');
    //     console.log(recipeData.data[1], 'numero 1')
    //     console.log(recipeResult.data, 'esto es recipe.result');
    // };

  

    return (
        <div>
            <div className="header-div"> <Header/> </div>
            <div className="search-store-container">
                <Search/>
            </div>
            <div className="div">ESTO ES STORE
                <div className="ingredient-container">Componente ingrediente
                    <Ingredient
                        // name={store.name}
                    />
                </div>
            </div>
            {/* <button onClick={() => getRecipes()}></button> */}
 
        </div>
    )
}

// export default connect()(Store);
export default Store;