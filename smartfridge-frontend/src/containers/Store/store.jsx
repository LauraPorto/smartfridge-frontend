import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import Search from '../../components/Search/search';
import Header from '../../components/Header/header';

import { Media } from 'reactstrap';

const Store = () => {

    const history = useHistory();

    const [imageUrl, setImageUrl] = useState("");




    return (
        <div>
            <div className="header-store">
                <Header/>
            </div>
            <div className="search-store-container">
                <Search/>
            </div>
            <div className="main-store">
                <Media>
                    <Media left top href="#">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                    <Media heading>
                        Top aligned media
                    </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                </Media>
                <Media className="mt-1">
                    <Media left middle href="#">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                    <Media heading>
                        Middle aligned media
                    </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                </Media>
                <Media className="mt-1">
                    <Media left bottom href="#">
                    <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
                    </Media>
                    <Media body>
                    <Media heading>
                        Bottom aligned media
                    </Media>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </Media>
                </Media>
            </div>          
        </div>
    )
}

export default Store;
