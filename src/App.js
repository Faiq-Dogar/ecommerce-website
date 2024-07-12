import ResponsiveAppBar from './componenets/Appbar';
import LandingPage from './pages/LandingPage';
import Product from './pages/Product';
import Footer from './componenets/Footer';
import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import saleImage from './Images/Screenshot 2024-07-10 013926.png'
import aboutImage from './Images/Screenshot 2024-07-10 155335.png'
import About from './pages/About';
import Contact from './pages/Contact';
import ProductDiscription from './pages/ProductDiscription';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Billing from './pages/Billing';
import MyAccount from './pages/MyAccount';
import { useDispatch } from 'react-redux';
import { setItems } from './Context/actions/itemActions';
import { setUserData } from './Context/actions/userActions';

function App() {

  const API_URL_STOCK = "http://localhost:3500/products";
  const API_URL_USER = "http://localhost:3501/users";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //khtm
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [userData, setuserData] = useState([]);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loggedin, setloggedin] = useState(false);
  const [user, setUser] = useState([]);
  const [qunatity, setQunatity] = useState(1);
//khtm

  useEffect(() => {
    const fetch_items = async () => {
      try {
        const response = await fetch(API_URL_STOCK);
        if (!response.ok) {
          throw Error('Did not receive Expected data');
        }
        const list = await response.json();
        // dispatch(setItems(list));
        setItems(list);
        setOriginalItems(list);
        
      } catch (err) {
        console.log("Errrororororororo" + err);
      }
    }
    const fetch_users = async () => {
      try {
        const response = await fetch(API_URL_USER);
        if (!response.ok) {
          throw Error('Did not receive Expected data');
        }
        const user = await response.json();
        // dispatch(setUserData(user));
        setUserData(user)
        console.log("User data" + userData);
      } catch (err) {
        console.log("Errrororororororo" + err);
      }
    }

    fetch_items()
    fetch_users()
  }, [dispatch]);

  useEffect(() => {
    console.log("USer2: ", user);
    localStorage.setItem('UserCart', JSON.stringify(user));

    if (user) {
      navigate('/');
    }
  }, [user]);

  const filter = (catory) => {
    setItems(originalItems.filter((item) => item.catagory === catory));
  }

  const add_to_cart = async (item_id) => {
    try {
      const response = await fetch(`${API_URL_USER}/${1}`);

      if (!response.ok) {
        throw Error('Did not resolve Expected user data');
      }
      const user = await response.json();
      setuserData(user);
      console.log("User data" + userData);
      if (!user.cart.id.includes(item_id)) {
        user.cart.id.push(item_id);
        user.cart.quantity.push(1);

        const UpdateData = await fetch(`${API_URL_USER}/${1}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        });

        if (!UpdateData.ok) {
          throw new Error('Failed to update user cart');
        }
        console.log('User cart updated successfully');

      } else {
        console.log('Product already in cart');
      }
    } catch (error) {
      console.error('Error:', error);
    }

  };
  const captureEmail = (e) => {
    setEmail(e.target.value);
  }
  const capturePassword = (e) => {
    setPassword(e.target.value);
  }


  const validateUser = () => {

    setUser(userData.filter(user => user.email === email));
    console.log("USer: ", user);

  };

  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        {/* <Route path='/' element={<LandingPage
          saleImage={saleImage}
        />} /> */}
        <Route path='/' element={<LandingPage
          items={items}
          saleImage={saleImage}
          add_to_cart={add_to_cart}
        />} />
        <Route path='/products' element={<Product
          items={items}
          saleImage={saleImage}
          filter={filter}
          add_to_cart={add_to_cart}
        />} />
        <Route path='/about' element={<About
          aboutImage={aboutImage}
        />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path="/product/:productId" element={<ProductDiscription itemsL={items} add_to_cart={add_to_cart} qunatity={qunatity} setQunatity={setQunatity} />} />
        <Route path="/signIn" element={<Signin captureEmail={captureEmail} capturePassword={capturePassword} validateUser={validateUser} />} />
        <Route path="/signUp" element={<SignUp />} />
        {/* <Route path="/cart" element={<Cart user={user} />} items={items} cartItems={cartItems} /> */}
        <Route path="/checkout/:productId" element={<Billing qunatity={qunatity} />} />
        <Route path="/MyAccount" element={<MyAccount user={user} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
