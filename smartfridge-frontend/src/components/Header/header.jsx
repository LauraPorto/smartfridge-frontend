import React from 'react'
import {useHistory} from 'react-router-dom';
import Login from '../Login/login';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

import {connect} from 'react-redux';
import {LOGOUT} from '../../redux/types/userType';

const Header = (props) => {


    const history = useHistory();
    
    const logOut = () => {
        setTimeout(()=> {
            history.push('/');
            props.dispatch({ type: LOGOUT, payload : {}});
        },500);
    }

    return (
        <div className="header-container">
            
            <ul className="nav justify-content-center">
            {/* Logo de la aplicación */}
            {
                !props.user
                ?
                <>
                <div className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="/explore">Explore</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="/register">Register</a>
                </div>
                <div className='btn-login'>
                    <Login/>
                </div>
                </>
                :
                <>
                <div className="nav-item">
                    <a className="nav-link" href="/explore">Explore</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="/store">Store</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="/profile">Profile</a>
                </div>
                <div className="nav-item">
                    <div className="logout-container" onClick={() => logOut()}>
                        <FontAwesomeIcon icon={faDoorOpen}/>
                    </div>
                </div>
                </>
            } 
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        token: state.token
    }
} 
export default connect(mapStateToProps)(Header);

