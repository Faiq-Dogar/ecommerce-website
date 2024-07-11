import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import signInImage from '../Images/Screenshot 2024-07-11 063446.png'
import React from 'react'

const Signin = () => {
    return (
        <Grid container spacing={8} sx={{ my: "2%" }}>
            <Grid item xs={6} md={6}>
                <img src={signInImage} alt='SignIn Image' style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={6} md={6}>
                <form className='login-form'>
                    <Stack direction="column" spacing={3}>
                        <Typography variant='h3'>
                            Log in to EXCLUSIVE
                        </Typography>
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
                            <Button variant='contained' color='error' sx={{ my: "3%", px: "12%", pt: "1.25%", pb: "1%", fontWeight: "light" }}>
                                Log In
                            </Button>
                            <Button variant='outlined' color='error' sx={{ my: "3%", ml: "4%", px: "4%", pt: "1.25%", pb: "1%", fontWeight: "light" }}>
                                Foget Paswword?
                            </Button>
                        </Box>
                    </Stack>
                </form>
            </Grid>
        </Grid>
    )
}

export default Signin
