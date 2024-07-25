import { Typography } from '@mui/material';
import React from 'react'

const CopyrightFooter = () => {
    const today = new Date();
  return (
    <Typography sx={{display: "flex", justifyContent: "center"}}>
       &copy; Copyright {today.getFullYear()}. All right reserved.
    </Typography>
  )
}

export default CopyrightFooter
