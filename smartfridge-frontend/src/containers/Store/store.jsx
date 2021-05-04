import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Search from '../../components/Search/search';
import Header from '../../components/Header/header';



const Store = () => {

    const history = useHistory();

    

    return (
        <div>
            <div className="header-div"> <Header/> </div>
            <div className="search-store-container">
                <Search/>
            </div>
 
        </div>
    )
}

export default Store;
