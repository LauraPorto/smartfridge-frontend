import React, {useEffect} from 'react'

import axios from 'axios';
import Footer from '../../components/Footer/footer';
import vegetables3 from '../../assets/vegetables3.jpg';
import brigitte from '../../assets/brigitte.jpg';
import pasta from '../../assets/pasta.jpg';

const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';

const Explore = (props) => {

    useEffect( () => {
        getRandom();
    }, [])

    const getRandom = async () => {
        const random = await axios.get(`https://api.spoonacular.com/recipes/random${apiKey}&number=3`);
        console.log(random.data.recipes, 'recetas aleatorias');

        const randomRecipe = random.data.recipes;
        console.log(randomRecipe, 'this is random')
    };

    return (
        <div className="explore-main-container">
            <div className="container-carousel">

                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={pasta} style={{width: '100%', height: 'auto'}} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Plato 1</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src={vegetables3} style={{width: '100%', height: 'auto'}} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Plato 2</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>
                        <div class="carousel-item">
                        <img src={brigitte} style={{width: '100%', height: 'auto'}} class="d-block w-100" alt="..."/>
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Plato 3</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* <div className="footer-container">
                <Footer/>
            </div> */}
            
        </div>

    )
}


export default Explore;
