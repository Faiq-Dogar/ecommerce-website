import React, { useEffect } from 'react'
import { Box, Button, ButtonGroup, Card, Divider, Grid, Rating, Stack, Typography } from '@mui/material'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import Subheading from '../componenets/Subheading'
import SubHeadingDescription from "../componenets/SubHeadingDescription";
import CardBox from './CardBox';
import { useLocation, useNavigate } from 'react-router-dom';
import image8 from "../Images/11_f900d3f6-3afd-4f1f-80c3-53311e3b3e7c_800x-ezgif.com-webp-to-jpg-converter.jpg"

const DiscriptionGrid = ({ item, qunatity, setQunatity }) => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Reset quantity to 1 whenever the path after product/ changes
        if (location.pathname.startsWith('/product/')) {
            setQunatity(1);
        }
    }, [location.pathname, setQunatity]);

    const buyProduct = () => {
        navigate(`/checkout/${item.name}`, { state: { item } });
    }
    return (
        <Grid container spacing={6} sx={{ mt: "3%", mb: "8%" }}>
            <Grid item xs={3} sm={2} md={1}>
                <Stack direction="column" spacing={3}>
                    <img src={image8} className='offer-img' alt='Product images' />
                    <img src={image8} className='offer-img' alt='Product images' />
                    <img src={image8} className='offer-img' alt='Product images' />
                    <img src={image8} className='offer-img' alt='Product images' />
                </Stack>
            </Grid>
            <Grid item xs={9} sm={6} md={6}>
                <img src={image8} className='offer-img' alt='Product images' />
            </Grid>
            <Grid item xs={12}  sm={4}md={5}>
                <Stack direction="column" spacing={3}>

                    <Subheading text={item.name} />
                    <Rating name="half-rating" defaultValue={item.rating} precision={0.5} disabled />
                    {item.newPrice === 0 ?
                        <Typography variant='h4'>{item.oldPrice}</Typography> :
                        (<p><span style={{ textDecoration: "line-through", marginRight: "15px", color: "grey" }}>Rs. {item.oldPrice}/-</span><Typography variant='h4'>{item.newPrice}/-</Typography></p>)
                    }
                    <SubHeadingDescription text={"This classic white women's t-shirt is a wardrobe essential, featuring a soft, breathable cotton fabric that provides ultimate comfort for everyday wear. The clean, crisp white color adds a timeless touch to any outfit, ensuring you look effortlessly chic and stylish."} />
                    <hr />
                    <Stack direction="row" spacing={3}>
                        <Typography variant='h5'>Size:</Typography>
                        <Button variant='outlined' color="success">XS</Button>
                        <Button variant='outlined' color="success">S</Button>
                        <Button variant='outlined' color="success">M</Button>
                        <Button variant='outlined' color="success">L</Button>
                        <Button variant='outlined' color="success">XL</Button>
                    </Stack>
                    <Box>
                        <ButtonGroup variant="outlined" color="success" aria-label="Basic button group">
                            <Button sx={{ px: 3, py: 0.75 }}
                                onClick={() => setQunatity(qunatity - 1)}>-</Button>
                            <Button sx={{ px: 5, py: 0.75 }} disabled>{qunatity}</Button>
                            <Button sx={{ px: 3, py: 0.75 }}
                                onClick={() => setQunatity(qunatity + 1)}>+</Button>
                        </ButtonGroup>
                        <Button variant='contained' color='error' sx={{ my: "3%", ml: "4%", px: "12%", pt: "1.25%", pb: "1%", fontWeight: "light" }}
                            onClick={buyProduct}>
                            Buy Now
                        </Button>
                        <Button variant='outlined' color='error' sx={{ my: "3%", ml: "4%", px: "4%", pt: "1.25%", pb: "1%", fontWeight: "light" }}>
                            <FavoriteBorderOutlinedIcon />
                        </Button>
                    </Box>
                    <Card variant="outlined" sx={{ maxWidth: "100%" }}>
                        <CardBox head={"Free Delivery"} dis={"Free Delvery to all cities."} icon={<LocalShippingOutlinedIcon className='disription-icon' />} />
                        <Divider />
                        <CardBox head={"Return Delivery"} dis={"Free 30 Days Delvery retuen to all cities."} icon={<AutorenewOutlinedIcon className='disription-icon' />} />
                    </Card>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default DiscriptionGrid
