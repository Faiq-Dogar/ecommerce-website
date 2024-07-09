import { Button } from '@mui/material'
import React from 'react'

const Btns2 = ({text}) => {
  return (
    <Button variant='contained' color='error' sx={{my: "3%", ml: "41%", px: "4.5%", pt: "1.25%", pb: "1%", fontWeight:"light"}}>
        {text}
    </Button>
  )
}

export default Btns2

