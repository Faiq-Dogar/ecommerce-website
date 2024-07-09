import React from 'react'
import Img1 from "../Images/Screenshot 2024-07-09 171616.png"
import Img2 from "../Images/Screenshot 2024-07-09 172424.png"
import { Grid, Button } from '@mui/material'

const NewArrivalGrid = () => {
    return (
        <Grid container spacing={6} sx={{ mb: "5%" }}>
            <Grid item xs={6} md={6}>
                <Button sx={{ width: "100%", height: "100%" }}>
                    <img src={Img1} alt='product image' style={{ width: "100%", height: "100%" }} />
                </Button>
            </Grid>
            <Grid item xs={6} md={6}>
                <Button sx={{ width: "100%", mb: "6%" }}>
                    <img src={Img2} alt='product image' style={{ width: "100%", height: "100%" }} />
                </Button>
                <Grid container spacing={6}>
                    <Grid item xs={6} md={6}>
                        <Button sx={{ width: "100%", height: "100%" }}>
                            <img src={Img1} alt='product image' style={{ width: "100%", height: "100%" }} />
                        </Button>                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Button sx={{ width: "100%", height: "100%" }}>
                            <img src={Img1} alt='product image' style={{ width: "100%", height: "100%" }} />
                        </Button>
                    </Grid>

                </Grid>
            </Grid>

        </Grid>

    )
}

export default NewArrivalGrid
