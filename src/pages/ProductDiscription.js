import { Container, Grid } from '@mui/material'
import React from 'react'
import Subheading from '../componenets/Subheading'

const ProductDiscription = ({ item }) => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={6} sx={{ mb: "5%" }}>
                <Grid item xs={6} md={2}>

                </Grid>
                <Grid item xs={6} md={5}>

                </Grid>
                <Grid item xs={6} md={5}>
                    <div>
                        <Subheading text={item.name} />
                    </div>
                    <Rating name="half-rating" defaultValue={item.rating} precision={0.5} disabled />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductDiscription
