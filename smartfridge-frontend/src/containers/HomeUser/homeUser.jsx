import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
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
            Hola {name}
            <div className="body-Promotion">
                <div class="row row-cols-1 row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card-menu">
                            <div class="menu-user"></div>
                            <div class="card-body-menu">
                                <h5 class="card-title">Presupuestos personalizados en Ortodoncias</h5>
                                <p class="card-text">La ortodoncia es una especialidad de la odontología que corrige la malposición de los dientes para colocarlos en su lugar correcto</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-menu">
                        <div class="menu-user"></div>
                        <div class="card-body-menu">
                            <h5 class="card-title">Descuentos en Estética Dental</h5>
                            <p class="card-text">Se trata de un tratamiento mínimamente invasivo, con altas propiedades estéticas y muy predecible</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-menu">
                        <div class="menu-user"></div>
                        <div class="card-body-menu">
                            <h5 class="card-title">Protesis Dental</h5>
                            <p class="card-text">Las prótesis dentales son los dientes postizos que sustituyen a los dientes naturales. Cuando falta uno o varios dientes</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-menu">
                        <div class="menu-user"></div>
                        <div class="card-body-menu">
                            <h5 class="card-title">Odontología Infantil</h5>
                            <p class="card-text">En septiembre, con la vuelta al cole, descuentos en el presupuesto de ortodoncias para los más peques de la familia.</p>
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
