import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

import {validateField, validateFields} from '../../uti';
import { Button, FormGroup, Input, Label, FormFeedback } from 'reactstrap';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import {connect } from 'react-redux';
import {LOGOUT} from '../../redux/types/userType';

const Profile = (props) => {

    const history = useHistory();
    console.log(props.user, 'esto es props.user')

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

            return alert('Guardado con éxito!!!');
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
            <div className='register-container'>
            
                <div className='form-container'>
                    <FormGroup>
                        <Label for='name'>Name:</Label>
                        <Input type='text' id='name' name='name' placeholder={props.user.user.name} onChange={handleState} valid={validationResult.validated && !validationResult.name} invalid={validationResult.validated && validationResult.name} />
                        <FormFeedback>{validationResult.name}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='surname'>Surname:</Label>
                        <Input type='text' id='surname' name='surname' placeholder={props.user.user.surname} onChange={handleState} valid={validationResult.validated && !validationResult.surname} invalid={validationResult.validated && validationResult.surname}/>
                        <FormFeedback>{validationResult.surname}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='phone'>Teléfono : </Label>
                        <Input type='number' id='phone' name='phone' placeholder={props.user.user.phone} onChange={handleState} valid={validationResult.validated && !validationResult.phone} invalid={validationResult.validated && validationResult.phone} />
                        <FormFeedback>{validationResult.phone}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='country'>Country:</Label>
                        <Input type='text' id='country' name='country' placeholder={props.user.user.country} onChange={handleState} valid={validationResult.validated && !validationResult.country} invalid={validationResult.validated && validationResult.country} />
                        <FormFeedback>{validationResult.country}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label form='email'>Email:</Label>
                        <Input type='text' id='email' name='email' placeholder={props.user.user.email} onChange={handleState} valid={validationResult.validated && !validationResult.email} invalid={validationResult.validated && validationResult.email} />
                        <FormFeedback>{validationResult.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label form='password'>Password:</Label>
                        <Input type='password' id='password' name='password' placeholder='******' onChange={handleState} valid={validationResult.validated && !validationResult.password} invalid={validationResult.validated && validationResult.password} />
                        <FormFeedback>{validationResult.password}</FormFeedback>
                    </FormGroup>
                    {/* <FontAwesomeIcon icon={faUserTimes} />
                    <FontAwesomeIcon icon={faAddressCard} /> */}
                    <Button color='primary' onClick={() => updateUser()}>UPDATE</Button>
                    <Button color='danger' onClick={() => deleteUser()}>DELETE</Button>
                    
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