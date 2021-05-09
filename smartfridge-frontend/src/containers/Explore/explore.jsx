import React, {useEffect} from 'react'
import Header from '../../components/Header/header';
import axios from 'axios';
import {connect} from 'react-redux';
import Search from '../../components/Search/search';
import fruits from '../../assets/fruits.png';

const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';

const Explore = (props) => {

    useEffect( () => {
        getRandom();
    }, [])

    const getRandom = async () => {
        const random = await axios.get(`https://api.spoonacular.com/recipes/random${apiKey}`);
        console.log(random.data.recipes, 'recetas aleatorias');
    };

    return (
        <div className="explore-main-container">
            <div className="header-div"> <Header/> </div>
            <div className="searchbox-container">
                <Search/>
            </div>
            <div className="explore-body">
                <img src={fruits} style={{maxWidth: '100%', width: 'auto', height: '35em'}}></img>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        foodInfo: state.recipeReducer,
        user: state.userReducer

    }
}

export default connect(mapStateToProps)(Explore);
