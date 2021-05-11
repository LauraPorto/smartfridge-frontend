import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import {validateField, validateFields} from '../../uti';
import {FormGroup, Input, FormFeedback } from 'reactstrap';
import profilepic from '../../assets/profilepic.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faGlobeEurope, faKey } from '@fortawesome/free-solid-svg-icons';

import {connect } from 'react-redux';
import {LOGOUT} from '../../redux/types/userType';

const Profile = (props) => {

    const history = useHistory();

    useEffect(() => {

        let token = props.user.token;

        if(token === ''){
            history.push('/')
        }
    }, [])

    //Hooks para la validación de campos
    const [validationResult, setValidationResult] = useState({
        validated: false,
        name: null
    });

    //Hooks para crear el estado de los datos del usuario
    const [data, setDataUser] = useState({ name: '' });
    

    const handleState = (event) => {
        let newData = { ...data, [event.target.name]: event.target.value };
        setDataUser(newData);
  
        setValidationResult({
            //
            ...validationResult,
            //
            [event.target.name]: validateField(event.target.name, event.target.value)
        });
    };

    const updateUser = async () => {
        let validationResult = validateFields(data);

        setValidationResult({
            ...validationResult,
            validated: true
        });

        try {
            let id = props.user.user._id;

            await axios.put(`http://localhost:3001/user/${id}`);

            return alert('Update Success!!!');
        } catch (error) {
            console.log(error);
        }
    };

    const deleteUser = async () => {
        try {
            let id = props.user.user._id;

            await axios.delete(`http://localhost:3001/user/${id}`);

            const confirmation = window.confirm('Are you sure you want to delete your account?');

            if (confirmation === true){
                return setTimeout(()=> {            
                    history.push('/')
                    props.dispatch({ type: LOGOUT, payload : {}});
                },500);
            }
             
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className='main-container-profile'>
            <img src={profilepic} alt='' style={{width: '100vh', height: '100vh', backgroundSize: 'cover'}}></img>
            <div className='register-container'>
                <div className='form-container'>
                    <FormGroup className="form-group">
                        <FontAwesomeIcon icon={faUser} style={{width: '2em', height: '2em', marginRight: '1em'}}/>
                        <Input type='text' id='name' name='name' placeholder={props.user.user.name} onChange={handleState} valid={validationResult.validated && !validationResult.name} invalid={validationResult.validated && validationResult.name} />
                        <FormFeedback>{validationResult.name}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <FontAwesomeIcon icon={faUser} style={{width: '2em', height: '2em', marginRight: '1em', color: 'transparent'}}/>
                        <Input type='text' id='surname' name='surname' placeholder={props.user.user.surname} onChange={handleState} valid={validationResult.validated && !validationResult.surname} invalid={validationResult.validated && validationResult.surname}/>
                        <FormFeedback>{validationResult.surname}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <FontAwesomeIcon icon={faPhone} style={{width: '2em', height: '2em', marginRight: '1em'}}/>
                        <Input type='number' id='phone' name='phone' placeholder={props.user.user.phone} onChange={handleState} valid={validationResult.validated && !validationResult.phone} invalid={validationResult.validated && validationResult.phone} />
                        <FormFeedback>{validationResult.phone}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <FontAwesomeIcon icon={faGlobeEurope} style={{width: '2em', height: '2em', marginRight: '1em'}}/>
                        <Input type='text' id='country' name='country' placeholder={props.user.user.country} onChange={handleState} valid={validationResult.validated && !validationResult.country} invalid={validationResult.validated && validationResult.country} />
                        <FormFeedback>{validationResult.country}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <FontAwesomeIcon icon={faEnvelope} style={{width: '2em', height: '2em', marginRight: '1em'}}/>
                        <Input type='text' id='email' name='email' placeholder={props.user.user.email} onChange={handleState} valid={validationResult.validated && !validationResult.email} invalid={validationResult.validated && validationResult.email} />
                        <FormFeedback>{validationResult.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <FontAwesomeIcon icon={faKey} style={{width: '2em', height: '2em', marginRight: '1em'}}/>
                        <Input type='password' id='password' name='password' placeholder='******' onChange={handleState} valid={validationResult.validated && !validationResult.password} invalid={validationResult.validated && validationResult.password} />
                        <FormFeedback>{validationResult.password}</FormFeedback>
                    </FormGroup>

                    <div className="buttons-upd">
                    <button color='primary' onClick={() => updateUser()}>UPDATE</button>
                    <button color='danger' onClick={() => deleteUser()}>DELETE</button>
                </div>
                    
                </div>
                
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer, 
        token: state.userReducer
    }
}

export default connect(mapStateToProps)(Profile);