import { NavLink } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { MdOutlineFavorite } from "react-icons/md";
import { HiShoppingCart  } from "react-icons/hi";

function Navbar() {
    return (
        <div className='navbar'>
            <NavLink to={'/'}><GoHomeFill /></NavLink>
            <NavLink to={'favorite'}><MdOutlineFavorite /></NavLink>
            <NavLink to={'basket'}><HiShoppingCart  /></NavLink>
        </div>
    )
}

export default Navbar