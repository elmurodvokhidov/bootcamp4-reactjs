import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCartShopping, FaRegHeart } from 'react-icons/fa6';
import { IoEyeOutline } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../redux/slice/user';

function CardComponent({ item }) {
    const dispatch = useDispatch();

    function deleteFunction(id) {
        dispatch(deleteUser(id))
    };

    return (
        <Card className='customCard col' style={{ width: '18rem' }}>
            <header variant="top">
                <Card.Img src={item.img} />
                <div className="cardModal">
                    <button><IoEyeOutline /></button>
                    {/* <FaHeart /> */}
                    <button><FaRegHeart /></button>
                    <button><FaCartShopping /></button>
                </div>
            </header>
            <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                    {item.about?.length > 50 ? item.about.slice(0, 50) + "..." : item.about}
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title>450$ <del>{item.price}$</del></Card.Title>
                    <Link to={`${item.id}`} className='btn btn-primary mx-3'><FiEdit2 /></Link>
                    <Button onClick={() => deleteFunction(item.id)} className='mx-3' variant="danger"><MdDelete /></Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;