import React from 'react'
import { Grid, Container } from '@mui/material'
import Btns from './Btns'

const Category = () => {
    return (
        <Container maxWidth="xl">

            <Grid container spacing={6}>
                <Grid item xs={6} md={2}>
                    <Btns title={'phone'}/>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Btns title={'Computers'}/>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Btns title={'Clothing'}/>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Btns title={'Watched'}/>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Btns title={'Headphones'}/>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Btns title={'Gaming'}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Category
