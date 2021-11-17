import React, { useState } from 'react';
import { Button, Typography, Container, TextField, } from '@mui/material';
import { RadioGroup, Radio } from '@mui/material';
import { FormControlLabel } from '@mui/material';


const Register = () => {
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ passwordConfirm, setPasswordConfirm ] = useState('')


    const [ emailError, setEmailError ] = useState(false)
    const [ firstNameError, setFirstNameError ] = useState(false)
    const [ lastNameError, setLastNameError ] = useState(false)
    const [ passwordError, setPasswordError ] = useState(false)
    const [ passwordConfirmError, setPasswordConfirmError ] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault()
        setFirstNameError(false)
        setLastNameError(false)
        setEmailError(false)
        setPasswordError(false)
        setPasswordConfirmError(false)

        if ( firstName === '' ) {
            setFirstNameError(true)
        }
        if ( lastName === '' ) {
            setLastNameError(true)
        }
        if ( email === '' ) {
            setFirstName(true)
        }
        if ( password === '' ) {
            setFirstName(true)
        }
        if ( passwordConfirm === '' ) {
            setFirstName(true)
        }
    }

    return (
        <Container>
            <Typography
                variant='h1'
                component='h4'
            >join today
            </Typography>

            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
               <TextField 
                onChange={(e) => setFirstName(e.target.value)}
                label='First Name'
                variant='outlined'
                color='secondary'
                fullWidth
                required
                error={firstNameError}
               />

                <TextField 
                onChange={(e) => setLastName(e.target.value)}
                label='Last Name'
                variant='outlined'
                color='secondary'
                fullWidth
                required
                error={lastNameError}
               />

                <TextField 
                onChange={(e) => setEmail(e.target.value)}
                label='Email'
                variant='outlined'
                color='secondary'
                fullWidth
                required
                error={emailError}
               />

            <TextField 
                onChange={(e) => setPassword(e.target.value)}
                label='Password'
                variant='outlined'
                color='secondary'
                fullWidth
                required
                error={passwordError}
               />

            <TextField 
                onChange={(e) => setPasswordConfirm(e.target.value)}
                label='Confirm Password'
                variant='outlined'
                color='secondary'
                fullWidth
                required
                error={passwordConfirmError}
               />

            <RadioGroup>
                <FormControlLabel value="1" control={<Radio />} label="Instructor" />
                <FormControlLabel value="2" control={<Radio />} label="Member" />
            </RadioGroup>

            <Button
            variant='contained'
            >sign up
            </Button>
            </form> 

        </Container>
    );
}

export default Register;
