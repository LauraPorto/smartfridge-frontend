import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Search from '../../components/Search/search';
import Header from '../../components/Header/header';

import { STORE_FOOD } from '../../redux/types/recipeType';
import { connect } from 'react-redux';


const Store = (props) => {

    const history = useHistory();

    // //Llamada axios a BBDD -> guardado en Redux -> llamado para la llamada a la API (result).
    // const setIngredients = () => {
    //     const store = axios.put('http://localhost:3001/store/')
    // }
    // const getIngredients = () => {
    //     const store = axios.get('http://localhost:3001/store/')
    // }

    // const getRecipes = () => {
    //     props.dispatch({type: STORE_FOOD, payload: })
    // }

    return (
        <div>
            <div className="header-div"> <Header/> </div>
            <div className="search-store-container">
                <Search/>
            </div>
 
        </div>
    )
}

export default Store;
