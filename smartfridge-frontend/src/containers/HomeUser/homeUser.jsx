import React from 'react';
import Header from '../../components/Header/header';

import Carousel from '../../components/Carousel/carousel';

const HomeUser = () => {
    return (
        <div className="homeuser-main-container">
            <div className="header-div"> <Header/> </div>
            <div className="carousel-container">
                <Carousel/>
            </div>
            <div className="access-container">
                <div className="myprofile-access">

                </div>
                <div className="mystore-access">
                    
                </div>
            </div>
        </div>
    )
}

export default HomeUser;
