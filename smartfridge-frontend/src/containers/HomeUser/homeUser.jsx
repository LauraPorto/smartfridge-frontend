import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faUtensils, faSearch } from '@fortawesome/free-solid-svg-icons';

const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';

const HomeUser = (props) => {

    const history = useHistory();

    const [data, setData] = useState({
        resultsDB: []
    });

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

        const resultsInfo = await axios.get(`http://localhost:3001/store/${userId}`);

        const results = resultsInfo.data;
        console.log(results, 'esto son results')

        // const mapResult = results.map(result => {
        //     return data.resultsDB.push(result.title)
        // })

    };


    return (
        <div className="homeuser-main-container">
            <div className="homeuser-title">
                Hello {name}!
            </div>
            <div className="body-homeuser">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        {/* {
                            data.resultsDB.map(element => 
                                {element.title}
                            )
                        } */}
                        <div class="card-menu">
                            <div class="card-body-menu">
                                <a href='/profile'>
                                    <FontAwesomeIcon icon={faUser} style={{width: '6em', height: '6em', color: '#93b496'}}/>
                                    <h5 class="card-title">Consulta tu perfil</h5>
                                </a>
                               
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-menu">
                            <div class="card-body-menu">
                                <a href='/building'>
                                    <FontAwesomeIcon icon={faHeart} style={{width: '6em', height: '6em', color: '#93b496'}}/>
                                    <h5 class="card-title">Consulta tus recetas favoritas</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-menu">
                            <div class="card-body-menu">
                                <a href='/explore'>
                                    <FontAwesomeIcon icon={faSearch} style={{width: '6em', height: '6em', color: '#93b496'}}/>
                                    <h5 class="card-title">Explora nuestras recetas</h5> 
                                </a>
                          
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-menu">
                            <div class="card-body-menu">
                                <a href='/store'>
                                    <FontAwesomeIcon icon={faUtensils} style={{width: '6em', height: '6em', color: '#93b496'}}/>
                                    <h5 class="card-title">Mira qué te ofrece tu nevera</h5>
                                </a>
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
