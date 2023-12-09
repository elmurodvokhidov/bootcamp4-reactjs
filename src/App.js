import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Favourite from './components/Favourite';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Stock from './components/Stock';
import Card from './components/Card';

function App() {

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='favourite' element={<Favourite />} />
        <Route path='cart' element={<Cart />} />
        <Route path='profile' element={<Profile />} />
        <Route path='stock' element={<Stock />} />
        <Route path=':id' element={<Card />} />
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
