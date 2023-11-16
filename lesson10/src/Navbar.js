import { NavLink } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { MdOutlineFavorite } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { useContext } from 'react';
import { ContextData } from './context/ContextData';

function Navbar() {
    const { like } = useContext(ContextData);

    return (
        <div className='navbar'>
            <NavLink to={'/'}><GoHomeFill /></NavLink>
            <NavLink to={'favorite'}><MdOutlineFavorite /> <span>{like.length}</span></NavLink>
            <NavLink to={'basket'}><HiShoppingCart /></NavLink>
        </div>
    )
}

export default Navbar