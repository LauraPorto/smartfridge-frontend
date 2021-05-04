import React, {useState} from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {SEARCH} from '../../redux/types/recipeType';
const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';
const query = '&query=';




const Search = (props) => {

    //Hooks para el buscador
    const [search, setSearch] = useState({
        searchBox: ''
    });

    const handleState = (event) => {
        let data = { ...search, [event.target.name]: event.target.value };
        setSearch(data);
    }


    const toSearch = async () => {

        let foodData = await axios.get(`https://api.spoonacular.com/food/search${apiKey}${query}${search.searchBox}`);

        const arraySearch = foodData.data.filter(explore => 
            explore.title.toLowerCase().includes(search.searchBox.toLowerCase())
        )

        setSearch({
            ...search, searchBox: arraySearch
        })

        props.dispatch({type: SEARCH, payload: foodData.data});

    }

    return (
        <div className='search-container'>
            <input className='search-box' type='search' name='searchBox' onChange={handleState}></input>
            <button type='submit' className='search-button' onClick={() => toSearch()}>SEARCH</button>
        </div>
    )
}

export default connect (Search);
