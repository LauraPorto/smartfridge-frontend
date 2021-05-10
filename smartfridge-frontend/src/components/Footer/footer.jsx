import React from 'react';
import fridge from '../../assets/fridge.png';


const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer-distributed">
                <div className="footer-left">
                    <a class="navbar-brand" href="/">
                        <img src={fridge} style={{maxWidth: '100%', width: '3em', height: '3em'}} alt="smartfridge" class="d-inline-block align-top"
                        />
                        <h1>SMARTFRIDGE</h1>
                    </a>
                    <div className="footer-icons">
                        <p className="footer-company-about">Keep in touch and stay up to date.</p>
                        <input className="input-footer" placeholder="introduce tu email"></input>
                        <button className="button-footer">SEND DATA</button>
                    </div>

                </div>

            </footer>
        </div>
    )
}

export default Footer;
