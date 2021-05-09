import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {STORE_FOOD} from '../../redux/types/recipeType';
import {SEARCH} from '../../redux/types/recipeType';
const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';
const query = '&query=';


const Search = (props) => {

    const history = useHistory();

    //Hooks para el buscador
    const [search, setSearch] = useState({
        searchBox: ''
    });

    const handleState = (event) => {
        let data = { ...search, [event.target.name]: event.target.value };
        setSearch(data);
    }


    const toSearch = async () => {

        let ingredients = await axios.get(`https://api.spoonacular.com/food/ingredients/search${apiKey}${query}${search.searchBox}`);


        console.log(ingredients.data.results, 'los ingredientes');
       

        const arraySearch = ingredients.data.results.filter(explore => 
            explore.name.toLowerCase().includes(search.searchBox.toLowerCase())
        )
        props.dispatch({type: STORE_FOOD, payload: ingredients.data.results});

        setSearch({
            ...search, searchBox: arraySearch
        })
           
    };



    // const toSearchFood = async () => {

    //     let foodData = await axios.get(`https://api.spoonacular.com/food/search${apiKey}${query}${search.searchBox}`);

    //     https://api.spoonacular.com/food/ingredients/{id}/information

    //     console.log(foodData.data.searchResults, 'resultado de foodData');

    //     const arraySearch = foodData.data.searchResults.filter(explore => 
    //         explore.name.toLowerCase().includes(search.searchBox.toLowerCase())
    //     )
   
    //     props.dispatch({type: SEARCH, payload: foodData.data});

    //     setSearch({
    //         ...search, searchBox: arraySearch
    //     })

    //     return setTimeout(() => {
    //         history.push('/explore');
    //     }, 500);
    // };

    return (
        <div className='search-container'>
            <input className='search-box' type='search' name='searchBox' onChange={handleState}></input>
            <button type='submit' className='search-button' onClick={() => toSearch()}>SEARCH</button>
            {/* <button type='submit' onClick={() => toSearchFood()}>SEARCH NUTRIENTS</button> */}
        </div>
    )
}

export default connect()(Search);
