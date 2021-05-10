import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';


const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';

const HomeUser = (props) => {

    const history = useHistory();

    useEffect(() => {

        let token = props.user.token;


        if(token === ''){
            history.push('/')
        }

        getFavRecipes();

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


    return (
        <div className="homeuser-main-container">
            Hola {name}
            <div className="body-Promotion">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card-menu">
                            <div class="menu-user"></div>
                            <div class="card-body-menu">
                                <h5 class="card-title">Presupuestos personalizados en Ortodoncias</h5>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-menu">
                        <div class="menu-user"></div>
                        <div class="card-body-menu">
                            <h5 class="card-title">Descuentos en Estética Dental</h5>
                           
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-menu">
                        <div class="menu-user"></div>
                        <div class="card-body-menu">
                            <h5 class="card-title">Protesis Dental</h5>
                           
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-menu">
                        <div class="menu-user"></div>
                        <div class="card-body-menu">
                            <h5 class="card-title">Odontología Infantil</h5>
                        
                        </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer
    }
}

export default connect(mapStateToProps)(HomeUser);
