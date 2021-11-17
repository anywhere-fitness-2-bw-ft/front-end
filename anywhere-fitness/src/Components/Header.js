import React from 'react';
import { Button, ButtonGroup, AppBar, Toolbar, Typography } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';


const Header = () => {
   return (
        <AppBar position='static'>
            <Toolbar>
                <Typography 
                    variant='h5' 
                    component='h1'
                    align='left' 
                > Anywhere Fitness </Typography>
                <ButtonGroup 
                variant='outlined'
                color='inherit'
                >
                    <Button> find a class </Button>
                    <Button> find an instructor </Button>
                    <Button> membership </Button>
                    <Button> teach </Button>
                </ButtonGroup>
                <Button 
                    onClick={() => console.log('You clicked me!')}
                    type='login'
                    color='secondary'
                    variant='text'
                    endIcon={<ArrowForwardIosRoundedIcon />}
                >log-in</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;