import { Button } from '@mui/material'
import React from 'react'

const RightBtn = ({ text }) => {
    return (
        <Button variant='contained' color='error' sx={{ ml: "75%", my: "3%", px: "4.5%", pt: "1.25%", pb: "1%", fontWeight: "light" }}>
            {text}
        </Button>
    )
}

export default RightBtn
