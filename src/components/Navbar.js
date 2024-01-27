import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TiHome } from "react-icons/ti";
import { BsFillBoxFill } from "react-icons/bs";
import { FaHeart, FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchUser } from '../redux/slice/user';

function NavbarComponent() {
    const dispatch = useDispatch();
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Link to={'/'}>
                        <img style={{ width: '70px' }} src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="..." />
                    </Link>
                </Navbar.Brand>
                <input onInput={(e) => dispatch(searchUser(e.target.value))} type="search" name="search" id="search" placeholder='Search something..' />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className='flex-grow-0'>
                    <Nav className="me-auto gap-4">
                        <NavLink to="/">Home <TiHome /></NavLink>
                        <NavLink to="product">Product <BsFillBoxFill /></NavLink>
                        <NavLink to="likes">Likes <FaHeart /></NavLink>
                        <NavLink to="basket">Basket <FaCartShopping /></NavLink>
                        <NavLink to="profile">Profile <FaUserAlt /></NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;