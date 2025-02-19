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
                    {user ? (
                        <div>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography gutterBottom variant="h6" component="div">
                                    Name:
                                </Typography>
                                <Typography gutterBottom variant="body1" component="div">
                                    {user.name}
                                </Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography gutterBottom variant="h6" component="div">
                                    Email:
                                </Typography>
                                <Typography gutterBottom variant="body1" component="div">
                                    {user.email}
                                </Typography>
                            </Stack>
                            {/* <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography gutterBottom variant="h6" component="div">
                                    Cart:
                                </Typography>
                                <Typography gutterBottom variant="body1" component="div">
                                    {user.cart.id.join(", ")} 
                                </Typography>
                            </Stack>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography gutterBottom variant="h6" component="div">
                                    Quantity:
                                </Typography>
                                <Typography gutterBottom variant="body1" component="div">
                                    {user.cart.quantity.join(", ")}
                                </Typography>
                            </Stack> */}
                        </div>
                    ) : (
                        <Typography gutterBottom variant="h5" color="error" component="div" align="center">
                            You are not logged in!!!
                        </Typography>
                    )}

                </Box>
            </Card>
        </Container >
    )
}

export default MyAccount
