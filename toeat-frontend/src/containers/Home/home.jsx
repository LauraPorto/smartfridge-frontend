import React from 'react'

import Header from '../../components/Header/header';
import spices from '../../assets/spices.jpg';
import spaghetti from '../../assets/spaghetti.jpg';
import fruits from '../../assets/fruits.png';
import Search from '../../components/Search/search';

const Home = () => {

  

    return (
        <div className="main-container-home">
            <div className="cover-container">
                <div className="header-div">
                    <Header /> 
    
                </div>

                <div className='cover-page'>
                    <div className="cover-page-img">
                        <img src={spices} style={{maxWidth: '100%', width: 'auto', height: 'auto',  backgroundsize: 'cover', backgroundPosition: 'top center'}}></img>
                    </div>

                    <div className="your-ingredient">
                        <div className="sub-text">
                            <h2>¿Quieres probar lo que tus alimentos te ofrecen?</h2>
                            <Search/>
                        </div>
                        <div className="sub-img">
                            <img src={fruits} style={{maxWidth: '100%', width: 'auto', height: '30em'}}></img>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home;
