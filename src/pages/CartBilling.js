import React from 'react'
import { Container, Divider, Grid, List, ListItem, ListItemText, Stack, TextField, Typography } from '@mui/material'
import BreadCrum from '../componenets/BreadCrum'
import InputField from '../componenets/InputField'
import { useLocation } from 'react-router-dom';
import Btns2 from '../componenets/Btns2'

const CartBilling = ({ shipping }) => {
    const location = useLocation();
    const { matchedProducts, cartTotalPrice } = location.state;

    console.log('Cart Billing Items: ', matchedProducts);

    return (
        <Container maxWidth="xl">
            <BreadCrum previous={"Account / Product / Cart"} now={"CheckOut"} />

            <Typography variant='h4' sx={{ mt: "3%" }}>
                Billing Details
            </Typography>
            <Grid container spacing={15} sx={{ mb: "5%", pt: "3%" }}>
                <Grid item xs={6} md={6}>
                    <form>
                        <Stack direction="column" spacing={5}>
                            <InputField placeholder={"First Name"} />
                            <InputField placeholder={"Last Name"} />
                            <InputField placeholder={"Street Address"} />
                            <InputField placeholder={"Apartment, floor, etc. (optional)"} />
                            <InputField placeholder={"Town / City"} />
                            <InputField placeholder={"Phone Number"} />
                            <InputField placeholder={"Email Address"} />
                        </Stack>
                    </form>
                </Grid>
                <Grid item xs={6} md={6}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        {matchedProducts.map((item, index) => (

                            <ListItem key={index}>
                                <Stack direction="row" sx={{ width: '100%' }} justifyContent="space-between" alignItems="center">
                                    <ListItemText
                                        primary={item.name}
                                    />
                                    <Typography gutterBottom variant="body1" component="div">
                                        Rs. {item.subTotal} /-
                                    </Typography>
                                </Stack>
                            </ListItem>
                        ))}
                        <ListItem>
                            <Stack direction="row" sx={{ width: '100%' }} justifyContent="space-between" alignItems="center">
                                <ListItemText primary="Sub Total" />
                                <Typography gutterBottom variant="body1" component="div">
                                    Rs. {cartTotalPrice} /-
                                </Typography>
                            </Stack>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Stack direction="row" sx={{ width: '100%' }} justifyContent="space-between" alignItems="center">
                                <ListItemText primary="Shipping" />
                                <Typography gutterBottom variant="body1" component="div">
                                    {shipping === 0 ? "Free" : shipping}
                                </Typography>
                            </Stack>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <Stack direction="row" sx={{ width: '100%' }} justifyContent="space-between" alignItems="center">
                                <ListItemText primary="total" />
                                <Typography gutterBottom variant="h6" component="div">
                                    Rs. {cartTotalPrice + shipping} /-
                                </Typography>
                            </Stack>
                        </ListItem>
                        <ListItem>
                            <TextField
                                id="coupen"
                                label="Coupen Code"
                                type="text"
                                variant="standard"
                                fullWidth
                            />
                        </ListItem>
                        <ListItem>
                            <Btns2 text={"Place Order"} />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CartBilling