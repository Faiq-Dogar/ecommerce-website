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
import AdminPanel from './pages/AdminPanel';
// import { setItems } from './Context/actions/itemActions';
// import { setUserData } from './Context/actions/userActions';

function App() {


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
  const [shipping, setShipping] = useState(5);
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  //khtm

  const GetItems = () => {
    fetch("http://localhost:3001/")
      .then(res => res.json())
      .then(data => {
        setItems(data);
        setOriginalItems(data);
      })
      .catch(err => console.log("Error: ", err))
  }
  const GetUser = (userId) => {
    fetch(`http://localhost:3002/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        console.log("User from GetUser:", data);
      })
      .catch(err => console.log("Error: ", err));
  }
  
  
  useEffect(() => {
    GetItems();
    // GetUser();

    setloggedin(JSON.parse(localStorage.getItem('isLoggedIn')));
    if (loggedin) {
      // validateUser();
    }

  }, []);
  // }, [dispatch]);


  useEffect(() => {
    console.log("USer2: ", user);
    localStorage.setItem('UserCart', JSON.stringify(user));
    
    if ((location.pathname.startsWith('/signIn') || location.pathname.startsWith('/signUp')) && user) {
      navigate('/');
    }
  }, [user]);
  
  
  const validateUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3002/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User Logged in Successfully!");
        console.log("Response data:", data);
        console.log("Status: ", data.email)
        setUser(data);
        setloggedin(true);
        GetUser(data._id);
      } else {
        console.error("Failed to log in.");
      }
    } catch (error) {
      console.error("An Error Occurred while logging in: ", error);
    }
  }
  const filter = (catory) => {
    
    setItems(originalItems);
    // if(catory === 'clothing')
    // {
    //   console.log("efjrfnjrfnr");
    //   setItems(originalItems.filter((item) => item.category == 'women'));
    // }
    setItems(originalItems.filter((item) => item.category === catory));
  }

  const add_to_cart = async (item_id) => {
    try {
      console.log(user._id);
      const userId = user._id;
      console.log(item_id);

      try {
        const response = await fetch(`http://localhost:3002/${userId}/cart`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ item_id }),
        });
        const data = await response.json();
        setUser(data.user);
        console.log('Cart updated successfully:', data);
      } catch (err) {
        console.error("Error updating cart:", err);
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
  const captureItemName = (e) => {
    setItemName(e.target.value);
  }
  const captureItemPrice = (e) => {
    setItemPrice(e.target.value);
  }
  const captureItemcategory = (e) => {
    setItemCategory(e.target.value);
  }
  



  const handleSubmit = async (e) => {
    console.log(`Inside handleSubmit, email: ${email}, password ${password}, name: ${name}`);
    e.preventDefault();

    const newUser = {
      name,
      email,
      password
    };

    try {
      const response = await fetch('http://localhost:3002/signup', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),

      });
      if (response.ok) {
        const data = await response.json();
        console.log("User created Successfully!");
        console.log("Response data:", data);
        setUser(data);
        setName('');
        setEmail('');
        setPassword('');

      } else {
        console.error("Failed to log in.");
      }
    }
    catch (error) {
      console.log("Error: ", error);
    }
  };

  const addItemtoDB = async (e) => {
    console.log(`Inside handleSubmit, ItemName: ${itemName}, ItemCategory ${itemCategory}, ItemPrice: ${itemPrice}`);
    e.preventDefault();

    const newItem = {
      itemName,
      itemCategory,
      itemPrice
    };

    try {
      const response = await fetch('http://localhost:3001/additem', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),

      });
      if (response.ok) {
        const data = await response.json();
        console.log("Item added Successfully!");
        console.log("Response data:", data);
        setItems(data.items);
        setItemName('');
        setItemCategory('');
        setItemPrice('');

      } else {
        console.error("Failed to log in.");
      }
    }
    catch (error) {
      console.log("Error: ", error);
    }
  };



  return (
    <>
      <ResponsiveAppBar email={email}/>
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
        <Route path="/product/:productId" element={<ProductDiscription
          itemsL={items}
          add_to_cart={add_to_cart}
          qunatity={qunatity}
          setQunatity={setQunatity} />} />
        <Route path="/signIn" element={<Signin
          captureEmail={captureEmail}
          capturePassword={capturePassword}
          validateUser={validateUser}
        />} />
        <Route path="/signUp" element={<SignUp
          captureName={captureName}
          captureEmail={captureEmail}
          capturePassword={capturePassword}
          handleSubmit={handleSubmit}
        />} />
        <Route path="/cart" element={<Cart
          user={user}
          items={items}
        />} />
        <Route path="/checkout/:productId" element={<Billing
          qunatity={qunatity}
          shipping={shipping}
        />} />
        <Route path="/MyAccount" element={<MyAccount user={user} />} />
        <Route path="/Cartcheckout/:cartItems" element={<CartBilling
          shipping={shipping}
        />} />
        <Route path="/AdminPanel" element={<AdminPanel
          username={user.name}
          captureItemName={captureItemName}
          captureItemPrice={captureItemPrice}
          captureItemcategory={captureItemcategory}
          addItemtoDB={addItemtoDB}
        />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
