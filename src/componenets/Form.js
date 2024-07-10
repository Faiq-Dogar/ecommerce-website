import React from 'react'
import InputField from './InputField'
import { Grid, TextareaAutosize, TextField } from '@mui/material'

const Form = () => {
    return (
        <form className=''>
            <Grid container spacing={3} sx={{ mb: "5%" }}>
                <Grid item xs={6} md={4}>
                    <InputField placeholder={"Your Name *"} />
                </Grid>
                <Grid item xs={6} md={4}>
                    <InputField placeholder={"Your Email *"} />
                </Grid>
                <Grid item xs={6} md={4}>
                    <InputField placeholder={"Your Phone *"} />
                </Grid>
            </Grid>
            <TextField id="filled-basic" label={"Your Message"} variant="filled" multiline rows={8} fullWidth />
        </form>
    )
}

export default Form
