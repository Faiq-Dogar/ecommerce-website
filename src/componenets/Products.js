import { Grid } from '@mui/material'
import React from 'react'
import ProductItem from './ProductItem'
import image1 from "../Images/Ribbed_T-shirt_white_1200x.jpg"
import image2 from "../Images/Ribbed_T-shirt_white_1200x.jpg"
import image3 from "../Images/Ribbed_T-shirt_white_1200x.jpg"
import image4 from "../Images/Ribbed_T-shirt_white_1200x.jpg"
import image5 from "../Images/Ribbed_T-shirt_white_1200x.jpg"
import image6 from "../Images/Ribbed_T-shirt_white_1200x.jpg"
import image7 from "../Images/Ribbed_T-shirt_white_1200x.jpg"
import image8 from "../Images/11_f900d3f6-3afd-4f1f-80c3-53311e3b3e7c_800x-ezgif.com-webp-to-jpg-converter.jpg"
import { Outlet } from 'react-router-dom'

const Products = ({ items }) => {
    const item_pics = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8
    ]

    return (
        <>
        <Grid container spacing={4}>
            {items.map((item) => (
                <Grid item xs={6} md={3}>
                    <div key={item.id}>
                        <ProductItem image={image8} item={item} />
                    </div>
                </Grid>
            ))}


        </Grid>
        <Outlet />
        </>
    )
}

export default Products
