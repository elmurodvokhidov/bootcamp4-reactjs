import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart, FaRegUser } from "react-icons/fa";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="logo">Cherry</h1>
      <div className="pages">
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'stock'}>Stock</NavLink>
        <NavLink to={'about'}>About Us</NavLink>
      </div>
      <div className="actions">
        <NavLink to={'favourite'}><FaHeart /></NavLink>
        <NavLink to={'cart'}><FaCartShopping /></NavLink>
        <NavLink to={'profile'}><FaRegUser /></NavLink>
      </div>
    </div>
  )
}

export default Navbar