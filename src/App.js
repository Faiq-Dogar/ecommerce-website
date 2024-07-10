import ResponsiveAppBar from './componenets/Appbar';
import LandingPage from './pages/LandingPage';
import Product from './pages/Product';
import Footer from './componenets/Footer';
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import saleImage from './Images/Screenshot 2024-07-10 013926.png'
import aboutImage from './Images/Screenshot 2024-07-10 155335.png'
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDiscription from './pages/ProductDiscription';

function App() {

  const API_URL = "http://localhost:3500/products";
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);

  useEffect(() => {
    const fetch_items = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw Error('Did not receive Expected data');
        }
        const list = await response.json();
        setItems(list);
        setOriginalItems(list);
      } catch (err) {
        console.log("Errrororororororo" + err);
      }
    }
    fetch_items()
  }, [])

  const filter = (catory) => {
    setItems(originalItems.filter((item) => item.catagory === catory));
  }


  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path='/' element={<LandingPage
          items={items}
          saleImage={saleImage}
        />} />
        <Route path='/products' element={<Product
          items={items}
          saleImage={saleImage}
          filter={filter}
        />} />
        <Route path='/about' element={<About
          aboutImage={aboutImage}
        />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path="/product/:productId" element={<ProductDiscription />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
