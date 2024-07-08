import { Button } from "@mui/material";

import React from 'react'

const Btns = ({ icon, title }) => {
  return (
    <Button sx={{
      textAlign: 'center',
      // border: '1px solid black',
      width: '100%',
      height: 'auto',
      py: '10%',
      color: 'black',
      fontWeight: '100',
      display: "flex",
      flexDirection: "column"
    }}
    color="error"
    variant="outlined">
      <p>{icon}</p>
      {title}
    </Button>
  )
}

export default Btns
