import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import Basket from "./pages/Basket";
import "./Style.css";
import AddInfo from "./pages/AddInfo";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="favorite" element={<Favorite />} />
        <Route path="basket" element={<Basket />} />
        <Route path="addinfo" element={<AddInfo />} />
      </Routes>
    </div>
  );
}

export default App;
