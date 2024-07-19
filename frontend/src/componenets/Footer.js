import { Box, Grid, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Heading from './Heading'
import Subheading from './Subheading'
import NavList from './NavList'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SimpleList from './SimpleList'
import CopyrightFooter from './CopyrightFooter'

const Footer = () => {
    const account = [
        "My Account",
        "Login / Register",
        "Cart",
        "Wishlist",
        "Shop"
    ]

    const links = [
        "Privacy Policy",
        "Terms of Use",
        "FAQ",
        "Contact"
    ]

    const address = [
        "14B, 21/2, Elite Block, Air Avenue City, Faisalabad",
        "faiqd17@gmail.com",
        "+92 310 7665484"
    ]
    return (
        <footer>
            <Box sx={{
                py: "5%",
                px: "7%",
                bgcolor: "black",
                color: "white"
            }}>

                <Grid container spacing={6} sx={{ mb: "5%" }}>
                    <Grid item xs={6} md={3}>
                        <Subheading text={"Subscribe"} />
                        <SimpleList content={address} />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Subheading text={"Account"} />
                        <NavList content={account} />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Subheading text={"Quick Links"} />
                        <NavList content={links} />
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Subheading text={"Download App"} />
                        <Grid container spacing={6} sx={{ my: "1%" }}>
                            <Grid item xs={6} md={1}>
                                <FacebookIcon />
                            </Grid>
                            <Grid item xs={6} md={1}>
                                <TwitterIcon />
                            </Grid>
                            <Grid item xs={6} md={1}>
                                <InstagramIcon />
                            </Grid>
                            <Grid item xs={6} md={1}>
                                <LinkedInIcon />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <CopyrightFooter/>
            </Box>
            
        </footer>
    )
}

export default Footer
