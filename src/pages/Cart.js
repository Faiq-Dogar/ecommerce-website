import { Button, Card, CardActions, CardContent, Container, Divider, List, ListItem, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BreadCrum from '../componenets/BreadCrum'
import { useNavigate } from 'react-router-dom';

const Cart = ({ user, items }) => {
    const [cartTotalPrice, setCarttotalPrice] = useState(0);
    const navigate = useNavigate();
    // const matchedProducts = [];

    const [matchedProducts, setMatchedProducts] = useState([]);

    useEffect(() => {
        let total = 0;
        const matched = [];
        // user.forEach((item) => {
        //     item.cart.id.forEach((cartItem, key) => {
        //         items.filter(singleItem => singleItem.id == cartItem).forEach((singleItem) => {
        //             const matchedProduct = {
        //                 name: singleItem.name,
        //                 // quantity: item.cart.quantity[key]
        //                 subTotal: singleItem.oldPrice * item.cart.quantity[key]
        //             };
        //             matched.push(matchedProduct);
        //             total += singleItem.oldPrice * item.cart.quantity[key];
        //         });
        //     });
        // });

        user.cart.id.forEach((cartItem, key) => {
            items.filter(singleItem => singleItem._id == cartItem).forEach((singleItem) => {
                const matchedProduct = {
                    name: singleItem.name,
                    // quantity: user.cart.quantity[key]
                    subTotal: singleItem.oldPrice * user.cart.quantity[key]
                };
                matched.push(matchedProduct);
                total += singleItem.oldPrice * user.cart.quantity[key];
            });
        });

        setMatchedProducts(matched);
        setCarttotalPrice(total);
        console.log(matchedProducts);

        //     // let total = 0;
        //     // user.forEach((item) => {
        //     //     item.cart.id.forEach((cartItem, key) => {
        //     //         items.filter(singleItem => singleItem.id == cartItem).forEach((singleItem) => {
        //     //             total += singleItem.oldPrice * item.cart.quantity[key];
        //     //         });
        //     //     });
        //     // });
        //     // setCarttotalPrice(total);
    }, [user, items]);

    const buyProduct = () => {
        navigate(`/Cartcheckout/${matchedProducts}`, { state: { matchedProducts, cartTotalPrice } });
    }

    return (
        <Container maxWidth="xl">
            <BreadCrum previous={"Home"} now={"Cart"} />
            {user ? (
                <div>
                    <TableContainer variant='outlined' component={Paper} sx={{ my: "5%" }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Product</TableCell>
                                    <TableCell align="center">Price</TableCell>
                                    <TableCell align="center">Quantity</TableCell>
                                    <TableCell align="center">Sub Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {user ? (
                                    user.cart.id.map((cartItem, key) => (
                                        items.filter(singleItem => singleItem._id == cartItem).map((singleItem, key2) => (
                                            <TableRow
                                                key={`${user._id}-${key}-${key2}`}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">{singleItem.name}</TableCell>
                                                <TableCell align="center" component="th" scope="row">{singleItem.oldPrice}</TableCell>
                                                <TableCell align="center" component="th" scope="row">{user.cart.quantity[key]}</TableCell>
                                                <TableCell align="center" component="th" scope="row">{singleItem.oldPrice * user.cart.quantity[key]}</TableCell>
                                            </TableRow>
                                        ))
                                    ))
                                )
                                    : (
                                        <div>Cart is empty</div>
                                    )
                                }
                                {/* {user.map((item, index) => (
                            item.cart.id.map((cartItem, key) => (
                                items.filter(singleItem => singleItem.id == cartItem).map((singleItem, key2) => (
                                    <TableRow
                                        key={`${index}-${key}-${key2}`}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{singleItem.name}</TableCell>
                                        <TableCell align="center" component="th" scope="row">{singleItem.oldPrice}</TableCell>
                                        <TableCell align="center" component="th" scope="row">{item.cart.quantity[key]}</TableCell>
                                        <TableCell align="center" component="th" scope="row">{singleItem.oldPrice * item.cart.quantity[key]}</TableCell>
                                    </TableRow>
                                ))
                            ))
                        ))} */}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <Card variant='outlined' className='cart-price-box'>
                        <CardContent>

                            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <Typography variant="h5" component="div">
                                        Cart Total
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Stack direction="row" sx={{ width: '100%' }} justifyContent="space-between" alignItems="center">
                                        <Typography gutterBottom variant="body1" component="div">
                                            Subtotal:
                                        </Typography>
                                        <Typography gutterBottom variant="body1" component="div">
                                            {cartTotalPrice}
                                        </Typography>
                                    </Stack>
                                </ListItem>
                                <Divider />
                                <ListItem >
                                    <Stack direction="row" sx={{ width: '100%' }} justifyContent="space-between" alignItems="center">
                                        <Typography gutterBottom variant="body1" component="div">
                                            Shipping Fee:
                                        </Typography>
                                        <Typography gutterBottom variant="body1" component="div">
                                            Free
                                        </Typography>
                                    </Stack>
                                </ListItem>
                                <Divider />
                                <ListItem >
                                    <Stack direction="row" sx={{ width: '100%' }} justifyContent="space-between" alignItems="center">
                                        <Typography gutterBottom variant="h6" component="div">
                                            Total Price:
                                        </Typography>
                                        <Typography variant="h6" align="right">
                                            {cartTotalPrice}
                                        </Typography>
                                    </Stack>
                                </ListItem>
                            </List>
                        </CardContent>
                        <CardActions >
                            <Button
                                sx={{ ml: "30%" }}
                                variant='contained'
                                color='error'
                                onClick={buyProduct}>Proceed to checkout</Button>
                        </CardActions>
                    </Card>
                </div>
            ) : (
                <Typography gutterBottom variant="h5" color="error" component="div" align="center">
                    You are not logged in!!!
                </Typography>
            )
            }
        </Container >
    )
}

export default Cart
