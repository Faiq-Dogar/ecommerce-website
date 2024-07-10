import { Button, ButtonGroup, Container, Grid, Rating, Typography } from '@mui/material'
import React from 'react'
import Subheading from '../componenets/Subheading'
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ProductDiscription = () => {
    const location = useLocation();
    const { item } = location.state;

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
                    <div>
                        {item.newPrice === 0 ?
                            <Typography variant='h4'>{item.oldPrice}</Typography> :
                            (<p><span style={{ textDecoration: "line-through", marginRight: "15px", color: "grey" }}>Rs. {item.oldPrice}/-</span><Typography variant='h4'>{item.newPrice}/-</Typography></p>)
                        }
                    </div>
                    <div>
                        Product Discription
                    </div>
                    <hr />
                    <div>
                        <Typography variant='h5'>Size</Typography>
                        <Button variant='outlined' color="success">XS</Button>
                        <Button variant='outlined' color="success">S</Button>
                        <Button variant='outlined' color="success">M</Button>
                        <Button variant='outlined' color="success">L</Button>
                        <Button variant='outlined' color="success">XL</Button>
                    </div>
                    <div>
                        <Typography variant='h5'>Size</Typography>
                        <ButtonGroup variant="outlined" color="success" aria-label="Basic button group">
                            <Button>XS</Button>
                            <Button>S</Button>
                            <Button>M</Button>
                            <Button>L</Button>
                            <Button>XL</Button>
                        </ButtonGroup>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductDiscription
