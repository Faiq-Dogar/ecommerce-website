import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import BreadCrum from '../componenets/BreadCrum'
import Subheading from '../componenets/Subheading'

const AdminPanel = ({ username, captureItemName, captureItemcategory, captureItemPrice, addItemtoDB }) => {
    return (
        <Container maxWidth="xl">
            <BreadCrum previous={"Home"} now={"My Acount"} />
            <Typography gutterBottom variant="h5" color="error" component="div" align="right">
                Welcome! {username}
            </Typography>
            <Subheading text={"Enter Item Details"} />
            <form className='addItem' onSubmit={addItemtoDB}>
                <Stack direction="column" spacing={5}>

                    <TextField
                        id="get-item-name"
                        label="Item Name"
                        type="text"
                        variant="standard"
                        onChange={captureItemName}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={"category"}
                            label="category"
                            onChange={captureItemcategory}
                        >
                            <MenuItem value={'phone'}>Phone</MenuItem>
                            <MenuItem value={'computer'}>Computer</MenuItem>
                            <MenuItem value={'women'}>Women</MenuItem>
                            <MenuItem value={'men'}>Men</MenuItem>
                            <MenuItem value={'gaming'}>Gaming</MenuItem>
                            <MenuItem value={'headphones'}>Headphones</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="get-price"
                        label="Item Price"
                        type="number"
                        variant="standard"
                        onChange={captureItemPrice}
                    />
                </Stack>
                <Button variant='contained' color='error' sx={{ my: "3%", ml: "70%", px: "12%", pt: "1.25%", pb: "1%", fontWeight: "light" }}
                    type='submit'
                >
                    Log In
                </Button>
            </form>
        </Container>
    )
}

export default AdminPanel
