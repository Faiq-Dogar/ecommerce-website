import React from 'react'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import { Container, Grid } from '@mui/material';
import Boxx from './Boxx';

const Features = () => {
    return (
        <Container maxWidth="xl">
            <Grid container spacing={4} sx={{ mb: "5%" }}>
                <Grid item xs={12} md={4}>
                    <Boxx icon={<LocalShippingOutlinedIcon />} headtext={"FREE AND FAST DELIVERY"} text={"Free delivery fro all orders over Rs. 140/-"}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Boxx icon={<HeadsetMicOutlinedIcon />} headtext={"24/7 CUSTOMER SERVICE"} text={"Friendly 24/7 customer support."}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Boxx icon={<GppGoodOutlinedIcon />} headtext={"MONEY BACK GUARANTE"} text={"We return money within 30 days. "}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Features
