import React from 'react'

import Footer from '../../components/Footer/footer';

import spices from '../../assets/spices.jpg';
import saladcheese from '../../assets/saladcheese.png';


const Home = () => {

    return (
        <div className="main-container-home">
            <div className="cover-container">

                <div className='cover-page'>
                    <div className="cover-page-img">
                        <img src={spices} style={{maxWidth: '100%', width: 'auto', height: 'auto'}}></img>
                    </div>

                    <div className="discover-recipes-container">
                        <div className="discover-text">
                            <img src={saladcheese} style={{maxWidth: '100%', width: '40em', height: '45em'}}></img>
                        </div>
                        <div>
                            <h2><a href='/register'>Sign up</a>and discover our recipes</h2>
                        </div>
                      
                    </div>

                    <div className="your-ingredient">
                        <div className="sub-text">
                            <h2>Blablabla</h2>
                        </div>
                        <div className="sub-img">
                            
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
