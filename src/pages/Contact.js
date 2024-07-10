import { Container, Grid } from '@mui/material'
import React from 'react'
import BreadCrum from '../componenets/BreadCrum'
import SubHeadingDescription from '../componenets/SubHeadingDescription'
import TextCard from '../componenets/TextCard'

const Contact = () => {
    return (
        <Container maxWidth="xl">
            <BreadCrum previous={"Home"} now={"Contact"} />
            <Grid container spacing={6} sx={{ mb: "5%" }}>
                <Grid item xs={6} md={4}>
                    <div className='about-dis'>
                        <TextCard />
                    </div>
                </Grid>
                <Grid item xs={6} md={8}>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact
