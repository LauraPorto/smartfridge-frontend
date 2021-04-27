import React from 'react'

import Header from '../../components/Header/header';
import '../../assets/spices.jpg';

const Home = () => {

  

    return (
        <div>
            <div className="main-container">
                <div className="header-div">
                    <Header />
                </div>
                <div>
                    <div className="cover-page"><img src='toeat-frontend/src/assets/vegetable3.jpg' className="img"></img></div>
                </div>

            </div>
        </div>
    )
}

export default Home;
