import React, {useState} from 'react'
import axios from 'axios';

const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';

const query_path = '&query=';


const Search = (props) => {

    //Hooks para el buscador
    const [search, setSearch] = useState({
        searchBox: ''
    });

    const handleState = (event) => {
        let data = { ...search, [event.target.name]: event.target.value };
        setSearch(data);
        console.log(data, 'esto es searchData');

    }


    const toSearch = async () => {


        let result = await axios.get(`https://api.spoonacular.com/food/search${apiKey}${query_path}`);

        console.log(result.data.searchResults, 'result.data');
        return result;
    }

    return (
        <div className='search-container'>
            <input className='search-box' type='search' name='searchBox' onChange={handleState}></input>
            <button type='submit' className='search-button' onClick={() => toSearch()}>SEARCH</button>
        </div>
    )
}

export default Search;
