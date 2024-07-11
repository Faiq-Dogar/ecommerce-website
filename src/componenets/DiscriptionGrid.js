import React from 'react'
import { Box, Button, ButtonGroup, Card, Divider, Grid, Rating, Stack, Typography } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import Subheading from '../componenets/Subheading'


const DiscriptionGrid = ({item}) => {
    return (
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
                    This classic white women's t-shirt is a wardrobe essential, featuring a soft, breathable cotton fabric that provides ultimate comfort for everyday wear. The clean, crisp white color adds a timeless touch to any outfit, ensuring you look effortlessly chic and stylish.
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
                <ButtonGroup variant="outlined" color="success" aria-label="Basic button group">
                    <Button sx={{ px: 3, py: 0.75 }}>-</Button>
                    <Button sx={{ px: 5, py: 0.75 }} disabled>1</Button>
                    <Button sx={{ px: 3, py: 0.75 }}>+</Button>
                </ButtonGroup>
                <Button variant='contained' color='error' sx={{ my: "3%", ml: "4%", px: "12%", pt: "1.25%", pb: "1%", fontWeight: "light" }}>
                    Buy Now
                </Button>
                <Button variant='outlined' color='error' sx={{ my: "3%", ml: "4%", px: "4%", pt: "1.25%", pb: "1%", fontWeight: "light" }}>
                    <FavoriteBorderOutlinedIcon />
                </Button>

                <Card variant="outlined" sx={{ maxWidth: "100%" }}>
                    <Box sx={{ p: 2 }}>
                        <Stack direction="row" spacing={3}>
                            <LocalShippingOutlinedIcon className='disription-icon' />
                            <Box>
                                <Typography variant="h5" component="div">
                                    Free Delivery
                                </Typography>
                                <Typography color="text.secondary" variant="body2">
                                    Free Delvery to all cities.
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                    <Divider />
                    <Box sx={{ p: 2 }}>
                        <Stack direction="row" spacing={3}>
                            <AutorenewOutlinedIcon className='disription-icon' />
                            <Box>
                                <Typography variant="h5">
                                    Return Delivery
                                </Typography>
                                <Typography color="text.secondary" variant="body2">
                                    Free 30 Days Delvery retuen to all cities.
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    )
}

export default DiscriptionGrid
