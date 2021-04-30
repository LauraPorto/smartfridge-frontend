import React from 'react'

import Header from '../../components/Header/header';
import spices from '../../assets/spices.jpg';

const Home = () => {

  

    return (
        <div>
            <div className="main-container">
                <div className="header-div">
                    <Header /> 
                </div>
                <div className='cover-page'>
                    <div className="cover-page-img">
                        <img src={spices} style={{maxWidth: '100%', width: 'auto', height: 'auto'}}></img>
                    </div>
                </div>

  
            </div>
        </div>
    )
}

export default Home;