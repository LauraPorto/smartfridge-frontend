import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label,FormFeedback } from 'reactstrap';

import {validateField, validateFields } from '../../uti';

//Redux
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types/userType';


const Login = (props) => {

    //Estado del Modal
    const [state, setState] = useState({
        open: false
    });

    //Hooks para la validación de errores en forumulario
    const [validationResult, setValidationResult] = useState({
        validated: false,
        name: null
    });

    const toggleLogin = () => {
        setState({ open: !state.open });
    }

    const history = useHistory();

    //Hook para el estado del Login
    const [dataLogin, setLogin] = useState({
        email: '',
        password: ''
    })

    //Handlers
    const handleState = (event) => {
        let data = { ...dataLogin, [event.target.name]: event.target.value };
        setLogin(data);


        //
        setValidationResult({
            //
            ...validationResult,
            //
            [event.target.name]: validateField(event.target.name, event.target.value)
        });
    };


    const sendData = async () => {

        let validationResult = validateFields(dataLogin);

        //Setea el estado de validación
        setValidationResult({
            ...validationResult,
            validated: true
        });


        try {
            let result = await axios.post('http://localhost:3001/user/login', dataLogin);
                 
            props.dispatch({type: LOGIN, payload: result.data});
            console.log(result, 'result');
            return history.push('/home-user');
                                
        } catch (error) {
            if(error.isAxiosError & error.response?.status === 403){
                alert('El usuario no existe');  
            }
        }
    };

    return (
        <div className="login">

            <div className="button-login button" onClick={toggleLogin}>Sign In</div>
            <div className="modal-custom" style={{background: '#f1f1f1'}}>      
                <Modal isOpen={state.open}>
                    <ModalHeader style={{fontFamily: 'Barlow, sans-serif', fontSize: '20px'}}>
                        SIGN IN
                    </ModalHeader>
                    <ModalBody >
                        <FormGroup>
                            <Label form='email' style={{fontFamily: 'Barlow Condensed, sans-serif', fontSize: '20px'}}>Email</Label>
                            <Input type='text' id='user' name='email' onChange={handleState} valid={validationResult.validated && !validationResult.email} invalid={validationResult.validated && validationResult.email} />
                            <FormFeedback>{validationResult.email}</FormFeedback>
                        </FormGroup>
                        <FormGroup>
                            <Label form='password' style={{fontFamily: 'Barlow Condensed, sans-serif', fontSize: '20px'}}>Password</Label>
                            <Input type='password' id='password' name='password' onChange={handleState} valid={validationResult.validated && !validationResult.password} invalid={validationResult.validated && validationResult.password} />
                            <FormFeedback>{validationResult.password}</FormFeedback>
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{fontFamily: 'Barlow Condensed, sans-serif', background: '#93b496', color: '#141414'}} onClick={() => sendData()}>CONFIRM</Button>
                        <Button style={{fontFamily: 'Barlow Condensed, sans-serif', background_color: 'transparent', color: '#141414'}} onClick={() => toggleLogin()}>CANCEL</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
    );
};


export default connect()(Login);