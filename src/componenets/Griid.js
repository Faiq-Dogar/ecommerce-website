import { Grid } from '@mui/material'
import React from 'react'
import GridItem from './GridItem'
import Heading from './Heading'
import SubHeadingDescription from './SubHeadingDescription'

const Griid = ({ aboutImage }) => {
    return (
        <Grid container spacing={6} sx={{ mb: "5%" }}>
            <Grid item xs={12} sm={6} md={6}>
                <div className='about-dis'><Heading name={"Our Story"} />
                    <SubHeadingDescription text={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} /><br/>
                    <SubHeadingDescription text={"It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <img className='offer-img' src={aboutImage} alt='About Image' />
            </Grid>
        </Grid>
    )
}

export default Griid
