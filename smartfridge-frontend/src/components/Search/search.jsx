import React, {useState} from 'react'
import axios from 'axios';

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

        let result = await axios.get(`https://api.spoonacular.com/food/search${apiKey}&query=apple`);

        // const arraySearch = result.data.data.results.filter(explore => 
        //     explore.title.toLowerCase().includes(search.searchBox.toLowerCase())
        // )

        // setSearch({
        //     ...search, searchBox: arraySearch
        // })

        return result.data;
    }

    return (
        <div className='search-container'>
            <input className='search-box' type='search' name='searchBox' onChange={handleState}></input>
            <button type='submit' className='search-button' onClick={() => toSearch()}>SEARCH</button>
        </div>
    )
}

export default Search;
