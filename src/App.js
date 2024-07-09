import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './componenets/Appbar';
import ImageCarousel from './componenets/ImageCarousel';
import Category from './componenets/Category';
import BestSelling from './componenets/BestSelling';
import NewArrival from './componenets/NewArrival';
import Features from './componenets/Features';
import Footer from './componenets/Footer';

function App() {
  return (
    // <div className="App">
    // </div>
    <>
      <ResponsiveAppBar />
      <ImageCarousel/>
      <Category/>
      <BestSelling />
      <NewArrival/>
      <Features/>
      <Footer/>
    </>
  );
}

export default App;
