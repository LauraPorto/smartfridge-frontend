import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {STORE_FOOD} from '../../redux/types/recipeType';
const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';
const query = '&query=';
const url = 'https://spoonacular.com/cdn/ingredients_{250x250}/';

const Search = (props) => {

    const history = useHistory();

    //Hooks para el buscador
    const [search, setSearch] = useState({
        searchBox: ''
    });

    const [imageUrl, setImageUrl] = useState(url);

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

    return (
        <div className='search-container'>
            <input className='search-box' type='search' name='searchBox' onChange={handleState}></input>
            <button type='submit' className='search-button' onClick={() => toSearch()}>SEARCH</button>
            {/* <button type='submit' onClick={() => toSearchFood()}>SEARCH NUTRIENTS</button> */}
        </div>
    )
}

export default connect()(Search);
