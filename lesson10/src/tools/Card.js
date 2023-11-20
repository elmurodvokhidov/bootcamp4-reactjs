import { useContext } from "react";
import { ContextData } from "../context/ContextData";
import { MdFavoriteBorder, MdOutlineFavorite, MdOutlineShoppingCart } from "react-icons/md";

function Card({ item }) {
    const { likeFun, like, increment, decrement } = useContext(ContextData);

    return (
        <div className="card" key={item.id}>
            <h1 className='discount'>{item.discount}% Off</h1>
            <figure><img src={item.img} alt={item.title} /></figure>
            <h1>{item.title}</h1>
            <div className='action_btn'>
                <h2><span>${Math.round(item.price - ((item.price / 100) * item.discount))}</span> <del style={{ color: 'silver' }}>${item.price}</del></h2>
                <button onClick={() => likeFun(item)} className='likeBtn'>{like.filter(element => element.id === item.id).length === 0 ? <MdFavoriteBorder /> : <MdOutlineFavorite />}</button>
                <button className='cartBtn'><MdOutlineShoppingCart /></button>
            </div>

            <div className="btn_group">
                <button onClick={() => decrement(item)} className='dec'>-</button>
                <span>{item.count + 1}</span>
                <button onClick={() => increment(item)} className='inc'>+</button>
            </div>
        </div>
    )
};

export default Card;