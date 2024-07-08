import React from 'react'
import { Grid, Container } from '@mui/material'
import PhoneAndroidSharpIcon from '@mui/icons-material/PhoneAndroidSharp';
import DesktopMacSharpIcon from '@mui/icons-material/DesktopMacSharp';
import CheckroomSharpIcon from '@mui/icons-material/CheckroomSharp';
import WatchSharpIcon from '@mui/icons-material/WatchSharp';
import EarbudsSharpIcon from '@mui/icons-material/EarbudsSharp';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Btns from './Btns';
import Heading from './Heading';

const Category = () => {
    return (
        <Container maxWidth="xl">
            <Heading name={"Browse by Catagory"}/>
            <Grid container spacing={6} sx={{mb:"5%"}}>
                <Grid item xs={6} md={2}>
                    <Btns icon={<PhoneAndroidSharpIcon style={{"fontSize" : "4em"}}/>} title={'phone'}/>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Btns icon={<DesktopMacSharpIcon style={{"fontSize" : "4em"}}/>} title={'Computers'}/>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Btns icon={<CheckroomSharpIcon style={{"fontSize" : "4em"}}/>} title={'Clothing'}/>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Btns icon={<WatchSharpIcon style={{"fontSize" : "4em"}}/>} title={'Watches'}/>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Btns icon={<EarbudsSharpIcon style={{"fontSize" : "4em"}}/>} title={'Headphones'}/>
                </Grid>
                <Grid item xs={6} md={2}>
                    <Btns icon={<SportsEsportsIcon style={{"fontSize" : "4em"}}/>} title={'Gaming'}/>
                </Grid>
            </Grid>
            <hr/>
        </Container>
    )
}

export default Category