import About from "./pages/About";
import Footer from "./pages/Footer";
import Navbar from "./pages/Navbar";
import Profile from "./pages/Profile";
import './Main.css';
import {
  // BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    // <Router>
    <div className="App">
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
      </Routes>


      <Footer />
    </div>
    // </Router>
  );
}

export default App;
