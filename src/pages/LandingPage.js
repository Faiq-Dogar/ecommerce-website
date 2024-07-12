import React from 'react'
import ImageCarousel from '../componenets/ImageCarousel';
import Category from '../componenets/Category';
import BestSelling from '../componenets/BestSelling';
import NewArrival from '../componenets/NewArrival';
import Features from '../componenets/Features';
import BestProducts from '../componenets/BestProducts';
import Offer from '../componenets/Offer';
import Btns2 from '../componenets/Btns2';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../Context/actions/userActions';
import CountDown from '../componenets/CountDown';

// const LandingPage = ({saleImage}) => {

const LandingPage = ({ items, saleImage , add_to_cart}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // const items = useSelector(state => state.items.items);

    const moveToProduct = () => {   
        navigate(`/products`);
    }

    const handleAddToCart = (item_id) => {
        dispatch(addToCart(item_id));
    }
    return (
        <div>
            <ImageCarousel />
            <CountDown statingSeconds={"1721043540347"} />
            <BestSelling
                text={"Flash Sales"}
                items={items.filter(item => item.newPrice !== 0).slice(0, 4)}
                add_to_cart={handleAddToCart}
            />
            <Btns2 text={"View All Products"} path={moveToProduct}/>
            <Category
                isdisable={true}
            />
            <BestSelling text={"Best Selling Products"} items={items.sort((a, b) => b.rating - a.rating).slice(0, 4)} />
            <Btns2 text={"View All Products"} path={moveToProduct}/>
            <Offer saleImage={saleImage} />
            <BestSelling text={"Explore Our Products"} items={items} />
            <Btns2 text={"View All Products"} path={moveToProduct}/>
            <NewArrival />
            <Features />
        </div>
    )
}

export default LandingPage

