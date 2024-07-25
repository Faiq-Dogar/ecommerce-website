import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const Carrd = ({ aboutImage }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            {/* <CardActionArea> */}
                <CardMedia
                    component="img"
                    height="300"
                    image={aboutImage}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Name
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Position
                    </Typography>
                </CardContent>
            {/* </CardActionArea> */}
        </Card>
    )
}

export default Carrd
