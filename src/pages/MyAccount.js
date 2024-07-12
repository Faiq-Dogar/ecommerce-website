import { Box, Card, Container, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import BreadCrum from '../componenets/BreadCrum'

const MyAccount = ({ user }) => {
    return (
        <Container maxWidth="xl">
            <BreadCrum previous={"Home"} now={"My Acount"} />
            <Typography gutterBottom variant="h5" color="error" component="div" align="right">
                Welcome!
            </Typography>

            <Card variant="outlined" sx={{ maxWidth: 800, mb: "5%" }} className='account-card'>
                <Box sx={{ p: 7 }}>
                    <Typography gutterBottom variant="h4" component="div">
                        My Info
                    </Typography>
                    <Divider sx={{ my: "5%" }} />
                    {user.map((item, index) => (
                        <div key={index}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography gutterBottom variant="h6" component="div">
                                    Name:
                                </Typography>
                                <Typography gutterBottom variant="body1" component="div">
                                    {item.name}
                                </Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography gutterBottom variant="h6" component="div">
                                    Email:
                                </Typography>
                                <Typography gutterBottom variant="body1" component="div">
                                    {item.email}
                                </Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography gutterBottom variant="h6" component="div">
                                    cart:
                                </Typography>
                                <Typography gutterBottom variant="body1" component="div">
                                    {item.cart.id}
                                </Typography>
                            </Stack>
                        </div>
                    ))}
                </Box>
            </Card>
        </Container >
    )
}

export default MyAccount
// {cart.map((item, index) => (
//     <TableRow
//         key={index}
//         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//     >
//         <TableCell component="th" scope="row">{item.id}</TableCell>
//         <TableCell align="right">{item.name}</TableCell>
//     </TableRow>
// ))} */}