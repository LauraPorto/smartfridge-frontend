import React, {useState, useEffect} from 'react';

import {connect} from 'react-redux';

//Redux para que pase la receta para poder sacar la información de ella
const Recipe = (props) => {

    
 

    return (
        <div>
            <p>
                <a className="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
            </p>
            <div className="row">
                <div className="col">
                    <div className="collapse multi-collapse" id="multiCollapseExample1">
                        <div className="card card-body">
                            Número de comensales
                            Ingredientes
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="collapse multi-collapse" id="multiCollapseExample2">
                        <div className="card card-body">
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