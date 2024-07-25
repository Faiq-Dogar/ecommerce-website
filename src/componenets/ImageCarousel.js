import React from 'react'
import Carousel from 'react-material-ui-carousel';
import { Paper, Container } from '@mui/material';
import image1 from '../Images/1_xTyt81dnEVL5JAWEnTcbNA.jpg'
import image2 from '../Images/1495502687253087351.jpg'
import image3 from '../Images/07An79EFIuJ3rZb37J1gmwf-1.webp'
import image4 from '../Images/apple-advertising-study-aug-2022-scaled.jpg'

const ImageCarousel = () => {
    const items = [
        {
            image: image1,
            alt: 'Image 1'
        },
        {
            image: image2,
            alt: 'Image 2'
        },
        {
            image: image3,
            alt: 'Image 3'
        },
        {
            image: image4,
            alt: 'Image 4'
        }
    ];
    return (
        <Container maxWidth="xl">
            <Carousel sx={{ width: '70%', mx: 'auto' , my:'5%'}}>
                {
                    items.map((item, index) => (
                        <Paper key={index}>
                            <img src={item.image} alt={item.alt} style={{ width: '100%', height: '400px' }} />
                        </Paper>
                    ))
                }
            </Carousel>
            <hr/>
        </Container>
    )
}

export default ImageCarousel
