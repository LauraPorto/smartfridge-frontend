import React from 'react';



const Footer = () => {
    return (
        <div className="footer-container">
            <footer className="footer-distributed">
                <div className="footer-left">
                   <h3>Company<span>logo</span></h3>
                    <p className="footer-company-name"> Company Name © 2015</p>
                    <div className="footer-icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                    </div>
                </div>

                <div className="footer-right">
                    <p className="footer-company-about">Keep in touch and stay up to date.</p>
                    <input className="input-footer" placeholder="introduce tu email"></input>
                    <button className="button-footer">SEND DATA</button>
                </div>

            </footer>
        </div>
    )
}

export default Footer;
