import React, {useState} from 'react'
import axios from 'axios';

// const API_KEY = d6e877dd55e74b919c1cf042e3e465bb;

const Search = () => {

    //Hooks para el buscador
    const [search, setSearch] = useState({
        searchBox: ''
    });

    const handleState = (event) => {
        let data = { ...search, [event.target.name]: event.target.value };
        setSearch(data);
    }

    const toSearch = async () => {

        let result = await axios.get(`https://api.spoonacular.com/food/search
        `)
    }

    return (
        <div className='search-container'>
            <input className='search-box' type='search' name='searchBox' onChange={handleState}></input>
            <button type='submit' className='search-button' onClick={() => toSearch()}>SEARCH</button>
        </div>
    )
}

export default Search;
