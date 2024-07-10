import React from 'react'
import ImageCarousel from '../componenets/ImageCarousel';
import Category from '../componenets/Category';
import BestSelling from '../componenets/BestSelling';
import NewArrival from '../componenets/NewArrival';
import Features from '../componenets/Features';
import BestProducts from '../componenets/BestProducts';
import Offer from '../componenets/Offer';
import Btns2 from '../componenets/Btns2';

const LandingPage = ({ items, saleImage }) => {
    return (
        <div>
            <ImageCarousel />

            <BestSelling
                text={"Flash Sales"}
                items={items.filter(item => item.newPrice !== 0).slice(0, 4)} />
            <Btns2 text={"View All Products"} />
            <Category
                isdisable={true}
            />
            <BestSelling text={"Best Selling Products"} items={items.sort((a, b) => b.rating - a.rating).slice(0, 4)} />
            <Btns2 text={"View All Products"} />
            <Offer saleImage={saleImage} />
            <BestSelling text={"Explore Our Products"} items={items} />
            <Btns2 text={"View All Products"} />
            <NewArrival />
            <Features />
        </div>
    )
}

export default LandingPage
