import ResponsiveAppBar from './componenets/Appbar';
import LandingPage from './pages/LandingPage';
import Product from './pages/Product';
import Footer from './componenets/Footer';
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
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
import CartBilling from './pages/CartBilling';
// import { setItems } from './Context/actions/itemActions';
// import { setUserData } from './Context/actions/userActions';

function App() {

  const API_URL_STOCK = "http://localhost:3500/products";
  const API_URL_USER = "http://localhost:3501/users";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();


  //khtm
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [userData, setuserData] = useState([]);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loggedin, setloggedin] = useState(false);
  const [user, setUser] = useState([]);
  const [qunatity, setQunatity] = useState(1);
  //khtm

  const fetch_users = async () => {
    try {
      const response = await fetch(API_URL_USER);
      if (!response.ok) {
        throw Error('Did not receive Expected data');
      }
      const user = await response.json();
      // dispatch(setUserData(user));
      console.log("User data from fetch_USers:  ", user);
      setuserData(user)
      console.log("UserData data from fetch_USers:  ", userData);
    } catch (err) {
      console.log("Errrororororororo" + err);
    }
  }
  const validateUser = () => {
    console.log("User Data: ", userData);
    setUser(userData.filter(user => user.email === email));
    console.log("USer: ", user);

  };

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
    fetch_items()
    fetch_users()
  }, []);
  // }, [dispatch]);


  useEffect(() => {
    console.log("USer2: ", user);
    localStorage.setItem('UserCart', JSON.stringify(user));

    if ((location.pathname.startsWith('/signIn') || location.pathname.startsWith('/signUp')) && user) {
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
        fetch_users()
        console.log('Users fetched again');
        validateUser()
        console.log('Users filtered again');

      } else {
        console.log('Product already in cart');
        fetch_users()
        console.log('Users fetched again from else');
        validateUser()
        console.log('Users filtered again from else');
      }
    } catch (error) {
      console.error('Error:', error);
    }

  };
  const captureName = (e) => {
    setName(e.target.value);
  }
  const captureEmail = (e) => {
    setEmail(e.target.value);
  }
  const capturePassword = (e) => {
    setPassword(e.target.value);
  }




  const handleSubmit = async (e) => {
    console.log(`Inside handleSubmit, email: ${email}, password ${password}, name: ${name}`);
    e.preventDefault();

    const newUser = {
      name,
      email,
      password,
      cart: {
        "id": [
          0
        ],
        quantity: [
          0
        ]
      },
    };

    try {
      const response = await fetch('http://localhost:3501/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('User added:', data);
      setUser(newUser);
      // Reset form fields
      setName('');
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error:', error);
    }
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
        <Route path="/signUp" element={<SignUp captureName={captureName} captureEmail={captureEmail} capturePassword={capturePassword} handleSubmit={handleSubmit} />} />
        <Route path="/cart" element={<Cart
          user={user}
          items={items}
        />} />
        <Route path="/checkout/:productId" element={<Billing qunatity={qunatity} />} />
        <Route path="/MyAccount" element={<MyAccount user={user} />} />
        <Route path="//checkout/cartItems" element={<CartBilling />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
