import React from 'react';
import Login from '../Login/login';
import {useHistory} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import fridge from '../../assets/fridge.png';

import {connect} from 'react-redux';
import {LOGOUT} from '../../redux/types/userType';

const Header = (props) => {

    const history = useHistory();

    const logOut = () => {
        setTimeout(()=> {           
            props.dispatch({ type: LOGOUT, payload : {}})
            history.push('/'); 
        },500);
    }

    return (
        <div className="header-container">
            <nav class="navbar navbar-fixed-top navbar-light  navbar-toggler-right">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">
                        <img src={fridge} style={{maxWidth: '100%', width: 'auto', height: '1.5em'}} alt="smartfridge" class="d-inline-block align-top"/>
                        SMARTFRIDGE
                    </a>
                
                    {
                    props.token === ''
                    ?
                    <>

                    <div class="navbar-nav mr-auto ml-auto text-center">             
                        <a class="nav-link" href="/">Home</a>
                        <a class="nav-link" href="/explore">Explore</a>
                        <a class="nav-link" href="/about">About Us</a>
                    </div>
                    <div class="navbar-buttons-right">
                        <Login/>
                        <button><a href="/register">SIGN IN</a></button>
                    </div>
                    </>
                    :
                    <>
                    <div class="navbar-nav mr-auto ml-auto text-center">             
                        <a class="nav-link" href="/">Home</a>
                        <a class="nav-link" href="/explore">Explore</a>
                        <a class="nav-link" href="/profile">Profile</a>
                        <a class="nav-link" href="/store">Store</a>
                    </div>
                    <div className="navbar-buttons-right" onClick={() => logOut()}>
                        <FontAwesomeIcon 
                        icon={faDoorOpen}
                        style={{width: '3em'}}
                        />
                    </div>                    
                    </>                   
                    }               
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        token: state.userReducer.token
    }
} 
export default connect(mapStateToProps)(Header);

