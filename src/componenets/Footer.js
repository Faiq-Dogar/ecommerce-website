import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Heading from './Heading'
import Subheading from './Subheading'
import SubHeadingDescription from './SubHeadingDescription'
import SimpleText from './SimpleText'

const Footer = () => {
    return (
        <div>
            <Box sx={{
                py: "3%",
                px: "7%",
                bgcolor: "black",
                color: "white"
            }}>

                <Grid container spacing={6} sx={{ mb: "5%" }}>
                    <Grid item xs={6} md={3}>
                        <Subheading text={"Subscribe"} />
                        <SimpleText text={"Get 10% off on your forst order."} />
                        <SimpleText text={"Get 10% off on your forst order."} />
                        <SimpleText text={"Get 10% off on your forst order."} />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Subheading text={"Subscribe"} />
                        <SimpleText text={"Get 10% off on your forst order."} />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Subheading text={"Subscribe"} />
                        <SimpleText text={"Get 10% off on your forst order."} />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Subheading text={"Subscribe"} />
                        <SimpleText text={"Get 10% off on your forst order."} />
                    </Grid>
                </Grid>

            </Box>
        </div>
    )
}

export default Footer
