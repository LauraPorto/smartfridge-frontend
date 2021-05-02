import React from 'react'

import Search from '../../components/Search/search';
import Footer from '../../components/Footer/footer';
import Header from '../../components/Header/header';

import spices from '../../assets/spices.jpg';
import fruits from '../../assets/fruits.png';


const Home = () => {

  

    return (
        <div className="main-container-home">
            <div className="cover-container">
                <div className="header-div">
                    <Header /> 
    
                </div>

                <div className='cover-page'>
                    <div className="cover-page-img">
                        <img src={spices} style={{maxWidth: '100%', width: 'auto', height: 'auto'}}></img>
                    </div>

                    <div className="discover-recipes-container">
                        <div clasName="discover-text"><h2><a href='/register'>Sign up</a>and discover our recipes</h2></div>
                    </div>

                    <div className="your-ingredient">
                        <div className="sub-text">
                            <h2>¿Quieres probar lo que tus alimentos te ofrecen?</h2>
                            <Search/>
                        </div>
                        <div className="sub-img">
                            <img src={fruits} style={{maxWidth: '100%', width: 'auto', height: '35em'}}></img>
                        </div>
                    </div>

                    <div className="footer-container">
                        <Footer/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home;
