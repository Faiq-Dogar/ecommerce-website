import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './componenets/Appbar';
import ImageCarousel from './componenets/ImageCarousel';
import Category from './componenets/Category';

function App() {
  return (
    // <div className="App">
    // </div>
    <>
      <ResponsiveAppBar />
      <ImageCarousel/>
      <Category/>
    </>
  );
}

export default App;
