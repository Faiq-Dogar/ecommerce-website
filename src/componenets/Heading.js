import { Typography } from '@mui/material'
import React from 'react'

const Heading = ({name}) => {
  return (
    <div>
      <Typography variant='h5' sx={{
        my:"3%",
        fontWeight:"bold",
        color:"red"
      }}>
        {name}
      </Typography>
    </div>
  )
}

export default Heading
