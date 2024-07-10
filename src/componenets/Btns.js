import { Button } from "@mui/material";
import React from 'react';

const Btns = ({ icon, title, filter, isdisable}) => {
  return (
    <Button 
      sx={{
        textAlign: 'center',
        width: '100%',
        height: 'auto',
        py: '10%',
        color: 'black',
        fontWeight: '100',
        display: "flex",
        flexDirection: "column"
      }}
      color="error"
      variant="outlined" 
      onClick={() => { filter(title.toLowerCase()) }}
      disabled={isdisable}
    >
      {icon}
      {title}
    </Button>
  );
}

export default Btns;
