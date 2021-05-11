import React from 'react';
import fridge from '../../assets/fridge.png';


const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer-distributed">
                <div className="footer-left">
                    <a class="navbar-brand-logo" href="/">
                        <img src={fridge} style={{maxWidth: '100%', width: '3.5em', height: '3.5em', color: '#93b496'}} alt="smartfridge" class="d-inline-block align-top"
                        />
                        <h1>SMARTFRIDGE</h1>
                    </a>
                    <div className="footer-icons">
                        <p className="footer-company-about">Keep in touch and stay up to date.
                        <input className="input-footer" placeholder="introduce your email"></input>
                        <button className="button-footer">SEND DATA</button>
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
