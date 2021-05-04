import React from 'react'
import Header from '../../components/Header/header';

import {connect} from 'react-redux';
import Search from '../../components/Search/search';
import fruits from '../../assets/fruits.png';

const Explore = () => {
    return (
        <div className="explore-main-container">
            <div className="header-div"> <Header/> </div>
            <div className="searchbox-container">
                <Search/>
            </div>
            <div className="explore-body">
                <img src={fruits} style={{maxWidth: '100%', width: 'auto', height: '35em'}}></img>
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        foodData: state.foodData
    }
}

export default connect(mapStateToProps)(Explore);
