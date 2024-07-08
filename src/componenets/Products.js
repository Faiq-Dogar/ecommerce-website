import { Grid } from '@mui/material'
import React from 'react'
import ProductItem from './ProductItem'

const Products = () => {
  return (
    <Grid container spacing={4}>
        <Grid item xs={6} md={3}>
            <ProductItem/>
        </Grid>
    </Grid>
  )
}

export default Products
