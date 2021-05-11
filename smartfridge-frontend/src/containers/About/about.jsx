import React from 'react'
import Footer from '../../components/Footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faSearch, faUtensils, faHamburger } from '@fortawesome/free-solid-svg-icons';
import bread from '../../assets/bread.jpg';

const About = () => {
    return (
        <div className="about-main-container">
            <div className="body-about">
                <div class="card-body-principal mb-3">
                    <img src={bread} style={{width: '100%', height: '43em'}}></img>
                </div>
                <div className="card-body-secundary">
                    <div class="card-body-title">
                        <h1 class="card-title">The best recipes for you</h1>
                    </div>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title">What do you have in the kitchen?</h3>
                                    <p class="card-text">Look for ingredients you have to find which recipe to cook</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <FontAwesomeIcon 
                                icon={faStore}
                                style={{width: '10em', height: '10em'}}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <FontAwesomeIcon 
                                icon={faSearch}
                                style={{width: '10em', height: '10em'}}
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title">Find the best recipes</h3>
                                    <p class="card-text">With the chosen ingredients, look for recipes of all kind of cooking recipes</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title">Recipes Information</h3>
                                    <p class="card-text">The recipes not only offer you information on how to make them, but also show additional information such as nutritional value, similar recipes and extended recipes</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <FontAwesomeIcon 
                                icon={faUtensils}
                                style={{width: '10em', height: '10em'}}
                                />
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-4">
                                <FontAwesomeIcon 
                                icon={faHamburger}
                                style={{width: '10em', height: '10em'}}
                                />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title">Enjoy</h3>
                                    <p class="card-text">Explore more recipes, take ideas, save your favorites</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About;
