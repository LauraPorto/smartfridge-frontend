import React, {useState, useEffect} from 'react';

import {connect} from 'react-redux';

//Redux para que pase la receta para poder sacar la información de ella
const Recipe = (props) => {

    
 

    return (
        <div>
            <p>
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
            </p>
            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                        <div class="card card-body">
                            Número de comensales
                            Ingredientes
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample2">
                        <div class="card card-body">
                            Resumen de las instrucciones
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         recipeData: state.recipeReducer
//     }
// }

// export default connect(mapStateToProps)(Recipe);
export default Recipe;