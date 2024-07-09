import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './componenets/Appbar';
import ImageCarousel from './componenets/ImageCarousel';
import Category from './componenets/Category';
import BestSelling from './componenets/BestSelling';
import NewArrival from './componenets/NewArrival';
import Features from './componenets/Features';
import Footer from './componenets/Footer';
import { useEffect, useState } from 'react'
import BestProducts from './componenets/BestProducts';

function App() {

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
    // <div className="App">
    // </div>
    <>
      <ResponsiveAppBar />
      <ImageCarousel />
      <BestSelling
        text={"Flash Sales"}
        items={items.filter(item => item.newPrice !== 0).slice(0,4)} />
      <Category />
      <BestProducts text={"Best Selling Products"} items={items.sort((a,b) => b.rating - a.rating).slice(0,4)} />
      <BestSelling text={"Explore Our Products"} items={items} />
      <NewArrival />
      <Features />
      <Footer />
    </>
  );
}

export default App;
