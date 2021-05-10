import React from 'react'
import Footer from '../../components/Footer/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faSearch, faUtensils, faHamburger } from '@fortawesome/free-solid-svg-icons';
import yogurt from '../../assets/yogurt.jpg';

const About = () => {
    return (
        <div className="about-main-container">
            <div className="body-about">
                <div class="card-body-principal mb-3">
                    <img src={yogurt} style={{width: '100%', height: '40em'}}></img>
                </div>
                <div className="card-body-secundary">
                    <div class="card-body-title">
                        <h1 class="card-title">Las mejores recetas para ti</h1>
                    </div>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title">¿Qué tienes en la cocina?</h3>
                                    <p class="card-text">Busca los ingredientes que tienes para encontrar qué recetas cocinar</p>
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
                                    <h3 class="card-title">Busca las mejores recetas</h3>
                                    <p class="card-text">Con los ingredientes seleccionados, busca recetas de todo tipo de cocinas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title">Información en las recetas</h3>
                                    <p class="card-text">Las recetas no sólo te ofrecen las instrucciones para su realización, sino también contenido adicional como carga nutricional de las recetas, recetas similares, ingredientes sustitutivos</p>
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
                                    <h3 class="card-title">Disfruta</h3>
                                    <p class="card-text">Explora más recetas, coge ideas, guarda recetas en favoritos para tenerlas siempre</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;
