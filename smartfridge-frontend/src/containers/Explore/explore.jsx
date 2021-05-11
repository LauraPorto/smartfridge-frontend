import React, {useEffect} from 'react'
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer/footer';
// import vegetables3 from '../../assets/vegetables3.jpg';
// import brigitte from '../../assets/brigitte.jpg';
// import pasta from '../../assets/pasta.jpg';


const apiKey = '?apiKey=d6e877dd55e74b919c1cf042e3e465bb';

const Explore = (props) => {

  const history = useHistory();

    useEffect( () => {
        getRandom();
    }, [])

    const getRandom = async () => {
        const random = await axios.get(`https://api.spoonacular.com/recipes/random${apiKey}&number=3`);
        console.log(random.data.recipes, 'recetas aleatorias');

        const randomRecipes = random.data.recipes;

        const random1 = randomRecipes[0];
        const random2 = randomRecipes[1];
        const random3 = randomRecipes[2];

       
    };


    return (
        <div className="explore-main-container">
            <div className="explore-container">
                <div className="img-explore">
                  <img></img>
                  <h2></h2>
                </div>
                <div className="img-explore">
                  <img></img>
                  <h2></h2>
                </div>
                <div className="img-explore">
                  <img></img>
                  <h2></h2>
                </div>
            </div>
            <div className="footer-container">
                <Footer/>
            </div>
            
        </div>

    )
}


export default Explore;
