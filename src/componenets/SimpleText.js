import { Typography } from '@mui/material'
import React from 'react'

const SimpleText = ({ text }) => {
    return (
        <Typography sx={{ fontWeight: "light" }} >
            {text}
        </Typography>
    )
}

export default SimpleText
