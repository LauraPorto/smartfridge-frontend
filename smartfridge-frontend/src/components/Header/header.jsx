import React from 'react'

import Login from '../Login/login';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

import {connect} from 'react-redux';
import {LOGOUT} from '../../redux/types/userType';

const Header = (props) => {


    
    const logOut = () => {
        setTimeout(()=> {
            props.dispatch({ type: LOGOUT, payload : {}});
        },500);
    }

    return (
        <div className="header-container">
            
            <ul className="nav justify-content-center">

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
                {/* <div className="nav-item">
                    <a className="nav-link" href="">Log Out</a>
                </div> */}
                <div className='btn-login'>
                    <Login/>
                </div>
                </>
                :
                <>
                <div className="nav-item">
                    <a className="nav-link" href="/explore">About Us</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="/store">Explore</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="/profile">Register</a>
                </div>
                <div className="nav-item">
                    <div className="logout-container" onClick={() => logOut()}>
                        <FontAwesomeIcon icon={faDoorOpen}/>
                    </div>
                </div>
                <div className='btn-login'>
                    <Login/>
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

