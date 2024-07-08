import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Navbar2 from './Navbar2';

// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//   },
// });

export default function Navbar() {
    //   const classes = useStyles();

    return (
        <div >
            <AppBar position="static" style={{
                backgroundColor: 'white', // Background color
                color: 'black' // Text color
            }}>
                <Toolbar>
                    <Typography variant="h6">
                        MyApp
                    </Typography>
                    {/* <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Services</Button>
          <Button color="inherit">Contact</Button> */}
                    <Navbar2 />

                </Toolbar>
            </AppBar>
        </div>
    );
}
