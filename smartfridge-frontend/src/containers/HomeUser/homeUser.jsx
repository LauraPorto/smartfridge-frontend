import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import Header from '../../components/Header/header';
import axios from 'axios';
import {connect} from 'react-redux';


const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';

const HomeUser = (props) => {

    const history = useHistory();

    useEffect(() => {

        let token = props.user.token;
        console.log(token, 'esto es el token');

        if(token === ''){
            history.push('/')
        }
    }, [])

    const name = props.user.user.name;
  
    const getFavRecipes = async () => {

        const userId = props.user.user._id;

        const results = await axios.get(`http://localhost:3001/store/${userId}`);
        
        const mapResults = results.data.map(element => {
            return element.apiId
        });
        
        const apiId = mapResults;

        const myFavs = await axios.get(`https://api.spoonacular.com/recipes/${apiId}/information${apiKey}`);

        const myFavsInfo = myFavs.data;
        console.log(myFavsInfo, 'esto es la información de mis recetas favoritas');

    };

    useEffect(() => {
        getFavRecipes();
        
    }, [])

    return (
        <div className="homeuser-main-container">
            <div className="header-div"> <Header/> </div>
            Hola {name}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    }
}

export default connect(mapStateToProps)(HomeUser);
