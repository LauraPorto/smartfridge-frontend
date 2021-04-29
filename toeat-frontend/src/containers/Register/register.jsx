import React from 'react'

import cooking1 from '../../assets/cooking1.jpg';

const Register = () => {
    return (
        <div className='main-container'>
            <div className='register-container'>
                <div className='img-container'><img src={cooking1} style={{maxWidth: '100%', width: 'auto', height: 'auto'}}></img></div>
                <div className='form-container'>
                    <form action='login.jsx'>

                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Register;
