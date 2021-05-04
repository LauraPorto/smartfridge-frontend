import React from 'react'

import Login from '../Login/login';

const Header = () => {


    

    return (
        <div className="header-container">
            <ul className="nav justify-content-center">
                <div className="nav-item">
                    <a className="nav-link" href="/about">About Us</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="/explore">Explore</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="/register">Register</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="">Log Out</a>
                </div>
                <div className='btn-login'>
                    <Login/>
                </div>
            </ul>
        </div>
    )
}

export default Header;
