import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem'

const Products = () => {
    const API_URL = "http://localhost:3500/products";
    const [items, setItems] = useState([]);

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
                        <ProductItem item_name={item.name} price={item.oldPrice} stars={item.rating}/>
                    </div>
                </Grid>
            ))}


        </Grid>
    )
}

export default Products
