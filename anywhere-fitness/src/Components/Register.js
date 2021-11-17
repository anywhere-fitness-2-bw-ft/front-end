import React from 'react';
import { Button, Typography, Container } from '@mui/material';

const Register = () => {
    return (
        <Container>
            <Typography
                variant='h1'
                component='h4'
                align='center' 
            >join today
            </Typography>



            <Button
            onClick={() => console.log('This will create a new account')}
            variant='contained'
            >sign up
            </Button>
        </Container>
    );
}

export default Register;
