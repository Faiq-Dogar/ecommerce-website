import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BreadCrum from '../componenets/BreadCrum'

const Cart = ({ user, items, cartItems }) => {
    console.log("cartItems: ", cartItems);

    console.log("Cart Data (stringify):" + JSON.stringify(user));
    console.log("Cart id Data (stringify):" + JSON.stringify(user.name));


    return (
        <Container maxWidth="xl">
            <BreadCrum previous={"Home"} now={"Cart"} />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Sub Total</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>


                        {user.map((item, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{item.id}</TableCell>
                                <TableCell align="right">{item.name}</TableCell>
                                <TableCell align="right">{}</TableCell>
                            </TableRow>
                        ))}

                    </TableBody>
                </Table>
            </TableContainer>

        </Container>
    )
}

export default Cart

//   useEffect(() => {
//     const filteredItems = items.filter(item => cart.cart.id.includes(item.id));
//     setCartItems(filteredItems);
//   }, [items, cart]);


{/* {cart.map((item, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{item.id}</TableCell>
                                <TableCell align="right">{item.name}</TableCell>
                            </TableRow>
                        ))} */}