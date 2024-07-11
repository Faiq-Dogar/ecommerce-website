import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import signInImage from '../Images/Screenshot 2024-07-11 063446.png'
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom';
import React from 'react'

const SignUp = () => {
    const navigate = useNavigate();
    const validateUser = () => {
        navigate(`/`);
    }
        return (
            <Grid container spacing={8} sx={{ my: "2%" }}>
                <Grid item xs={6} md={6}>
                    <img src={signInImage} alt='SignIn Image' style={{ width: "100%" }} />
                </Grid>
                <Grid item xs={6} md={6}>
                    <form className='login-form'>
                        <Stack direction="column" spacing={3}>
                            <Typography variant='h3'>
                                Create an account
                            </Typography>
                            <TextField
                                id="standard-search"
                                label="Name"
                                type="search"
                                variant="standard"
                            />
                            <TextField
                                id="standard-search"
                                label="Email Address"
                                type="search"
                                variant="standard"
                            />
                            <TextField
                                id="standard-search"
                                label="Password"
                                type="search"
                                variant="standard"
                            />
                            <Box>
                                <Button variant='contained' color='error' sx={{ my: "3%", width: "100%", pt: "2%", pb: "1.5%", fontWeight: "light" }}
                                    onClick={validateUser}>
                                    Create Account
                                </Button>
                                <Button variant='outlined' color='error' sx={{ my: "3%", width: "100%", pt: "2%", pb: "1.5%", fontWeight: "light" }}>
                                    <GoogleIcon style={{marginRight: "3%"}} />Sign up with Google
                                </Button>
                            </Box>
                        </Stack>
                    </form>
                </Grid>
            </Grid>
        )
    }

    export default SignUp
