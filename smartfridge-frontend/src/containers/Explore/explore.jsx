import React from 'react'
import Header from '../../components/Header/header';

import {connect} from 'react-redux';
import Search from '../../components/Search/search';


const Explore = () => {
    return (
        <div>
            <div className="header-div"> <Header/> </div>
            <div className="searchbox-container">
                <Search/>
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
