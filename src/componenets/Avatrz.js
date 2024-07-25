import React from 'react'
import { Avatar } from '@mui/material'

const Avatrz = ({ icon }) => {
    return (
        <Avatar sx={{ bgcolor: 'black', mb: "4%"}}>
            {icon}
        </Avatar>
    )
}

export default Avatrz