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
        // console.log(data)

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

            <div className="button-login button" onClick={toggleLogin}>Log In</div>

            <Modal isOpen={state.open}>
                <ModalHeader>
                    Iniciar Sesión
                    </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <Label form='email'>Email</Label>
                        <Input type='text' id='user' name='email' onChange={handleState} valid={validationResult.validated && !validationResult.email} invalid={validationResult.validated && validationResult.email} />
                        <FormFeedback>{validationResult.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label form='password'>Contraseña</Label>
                        <Input type='password' id='password' name='password' onChange={handleState} valid={validationResult.validated && !validationResult.password} invalid={validationResult.validated && validationResult.password} />
                        <FormFeedback>{validationResult.password}</FormFeedback>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={() => sendData()}>Entrar</Button>
                    <Button color='secundary' onClick={() => toggleLogin()}>Salir</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};


export default connect()(Login);