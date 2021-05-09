import React from 'react';
import {connect} from 'react-redux';

const Ingredient = (props) => {

    console.log(props, 'estas son las props que le llegan');


    return (
        <div className="ingredient-main">
            <div className="ingredient-conatiner">Ing</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        foodData: state.recipeReducer
    }
}

export default connect(mapStateToProps)(Ingredient);
