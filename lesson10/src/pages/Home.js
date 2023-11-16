import React from 'react'
import { ContextData } from '../context/ContextData'
import { useContext } from 'react';
import { MdFavoriteBorder, MdOutlineFavorite, MdOutlineShoppingCart } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

function Home() {
  const { info, addFun, increment, likeFun, like } = useContext(ContextData)
  return (
    <div className='home'>
      {
        info.map(item => (
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
              <button className='dec'>-</button>
              <span>{item.count + 1}</span>
              <button onClick={() => increment(item)} className='inc'>+</button>
            </div>
          </div>
        ))
      }

      <button className="add_btn" onClick={addFun}><FaPlus /></button>
    </div>
  )
}

export default Home