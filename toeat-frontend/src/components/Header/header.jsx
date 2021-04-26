import React from 'react'


const Header = () => {
    return (
        <div className="header-container">
            <ul className="nav justify-content-center">
                <div className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Active</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </div>
                <div className="nav-item">
                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </div>
            </ul>
        </div>
    )
}

export default Header;
