import React from 'react'

import axios from 'axios';

const Home = () => {

    const buscar = async () => {
        let resultado = await axios.get('https://api.spoonacular.com/recipes/findByIngredients?apiKey=d6e877dd55e74b919c1cf042e3e465bb&ingredients=milk,+egg');
        //Se pasan por query los ingredientes
        //Se pasa por query la apiKey para autorizar la request
        //Los resultados se encuentran en data (resultado.data, en este caso porque llamamos a axios en esta función)
        let muestra = resultado.data.image;

        return muestra;
    }

    return (
        <div>
            <div className="prueba">
                <input type='text' name='recipe'/>
                <button onClick={() => buscar()}>Buscar</button>
                <div></div>
            </div>
        </div>
    )
}

export default Home;
