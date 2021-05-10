import React, {useState} from 'react'
import axios from 'axios';
import cooking1 from '../../assets/cooking1.jpg';

import {validateField, validateFields} from '../../uti';

import { Button, FormGroup, Input, Label, FormFeedback } from 'reactstrap';


const Register = () => {

    //Validación de errores en el formulario
    const [validationResult, setValidationResult] = useState({
        validated: false,
        name: null
    });

    //Hooks con los datos del usuario
    const [dataRegister, setRegister] = useState({
        name: '',
        surname: '',
        phone: '',
        country: '',
        email: '',
        password: ''
    });


    //Handlers
    const handleState = (event) => {

        //
        setValidationResult({
            //
            ...validationResult,
            //
            [event.target.name]: validateField(event.target.name, event.target.value)
        });

        let data = { ...dataRegister, [event.target.name]: event.target.value };
        setRegister(data)
        console.log('update data', dataRegister);
    }


    const sendData = async () => {
        let validationResult = validateFields(dataRegister);

        //Setea el estado de validación
        setValidationResult({
            ...validationResult,
            validated: true
        });

        let result = await axios.post('http://localhost:3001/user/signup', dataRegister);
        console.log(result, 'esto es result');
    }

    return (
        <div className='main-container'>
            <div className='register-container'>
                <div className='img-container'><img src={cooking1} style={{maxWidth: '100%', width: 'auto', height: 'auto'}}></img></div>
                <div className='form-container'>
                    <FormGroup>
                        <Label for='name'>Name:</Label>
                        <Input type='text' id='name' name='name' onChange={handleState} valid={validationResult.validated && !validationResult.name} invalid={validationResult.validated && validationResult.name} />
                        <FormFeedback>{validationResult.name}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='surname'>Surname:</Label>
                        <Input type='text' id='surname' name='surname' onChange={handleState} valid={validationResult.validated && !validationResult.surname} invalid={validationResult.validated && validationResult.surname} />
                        <FormFeedback>{validationResult.surname}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='phone'>Teléfono : </Label>
                        <Input type='number' id='phone' name='phone' onChange={handleState} valid={validationResult.validated && !validationResult.phone} invalid={validationResult.validated && validationResult.phone} />
                        <FormFeedback>{validationResult.phone}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label for='surname2'>Country:</Label>
                        <Input type='text' id='country' name='country' onChange={handleState} valid={validationResult.validated && !validationResult.country} invalid={validationResult.validated && validationResult.country} />
                        <FormFeedback>{validationResult.country}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label form='email'>Email:</Label>
                        <Input type='text' id='email' name='email' onChange={handleState} valid={validationResult.validated && !validationResult.email} invalid={validationResult.validated && validationResult.email} />
                        <FormFeedback>{validationResult.email}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label form='password'>Password:</Label>
                        <Input type='password' id='password' name='password' onChange={handleState} valid={validationResult.validated && !validationResult.password} invalid={validationResult.validated && validationResult.password} />
                        <FormFeedback>{validationResult.password}</FormFeedback>
                    </FormGroup>
                    <Button color='primary' onClick={sendData}>SIGN UP</Button>
                </div>
            </div>
        </div>
    )
}

export default Register;
