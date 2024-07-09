import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'
import image1 from "../Images/Ribbed_T-shirt_white_1200x.jpg"
import image2 from "../Images/Ribbed_T-shirt_white_1200x.jpg"
import image3 from "../Images/Ribbed_T-shirt_white_1200x.jpg"
import image4 from "../Images/Ribbed_T-shirt_white_1200x.jpg"
import image5 from "../Images/Ribbed_T-shirt_white_1200x.jpg"
import image6 from "../Images/Ribbed_T-shirt_white_1200x.jpg"
import image7 from "../Images/Ribbed_T-shirt_white_1200x.jpg"
import image8 from "../Images/11_f900d3f6-3afd-4f1f-80c3-53311e3b3e7c_800x-ezgif.com-webp-to-jpg-converter.jpg"

const Products = () => {
    const API_URL = "http://localhost:3500/products";
    const [items, setItems] = useState([]);
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

    useEffect(() => {
        const fetch_items = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw Error('Did not receive Expected data');
                }
                const list = await response.json();
                setItems(list);
            } catch (err) {
                console.log("Errrororororororo" + err);
            }
        }
        fetch_items()
    }, [])

    return (
        <Grid container spacing={4}>


            {items.map((item) => (
                <Grid item xs={6} md={3}>
                    < div key={item.id} >
                        <ProductItem image={image8} item_name={item.name} price={item.oldPrice} stars={item.rating} />
                    </div>
                </Grid>
            ))}


        </Grid>
    )
}

export default Products
