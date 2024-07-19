import { Grid } from '@mui/material'
import React from 'react'
import Card from './Carrd'

const TeamGrid = ({ aboutImage }) => {
    return (
        <Grid container spacing={6} sx={{ mb: "5%" }}>
            <Grid item xs={6} md={4}>
                <Card aboutImage={aboutImage} />
            </Grid>
            <Grid item xs={6} md={4}>
                <Card aboutImage={aboutImage} />
            </Grid>
            <Grid item xs={6} md={4}>
                <Card aboutImage={aboutImage} />
            </Grid>
        </Grid>

    )
}

export default TeamGrid
