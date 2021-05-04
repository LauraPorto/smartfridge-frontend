import React from 'react'
import Header from '../../components/Header/header';

import vegetables3 from '../../assets/vegetables3.jpg';

const About = () => {
    return (
        <div className="about-main-container">
            <div className="header-div"> <Header/> </div>
            <div className="about-container">
                <img src={vegetables3} style={{maxWidth: '100%', width: 'auto', height: 'auto'}}></img>
                <div className="about-text">
                    Text about SmartFridge
                </div>
            </div>
        </div>
    )
}

export default About;
