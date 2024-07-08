import { Button } from "@mui/material";

import React from 'react'

const Btns = ({title}) => {
  return (
    <Button sx={{
        textAlign: 'center',
        border: '1px solid black',
        width: '100%',
        height: 'auto',
        py: '10%',
        color: 'black',
        fontWeight: '100'
    }}>
        {title}
    </Button>
  )
}

export default Btns
