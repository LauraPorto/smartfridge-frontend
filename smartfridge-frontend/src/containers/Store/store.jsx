import React from 'react'
import axios from 'axios';

import Search from '../../components/Search/search';
import Header from '../../components/Header/header';

const Store = () => {


    const viewFood = async () => {
        let result = await axios.get('')
    }


    return (
        <div>
            <Header/>
            <Search/>
            <button onClick={() => viewFood()}>CLICK</button>
        </div>
    )
}

export default Store;
