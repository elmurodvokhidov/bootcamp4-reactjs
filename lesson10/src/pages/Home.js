import React from 'react'
import { ContextData } from '../context/ContextData'
import { useContext } from 'react';
import { MdFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";

function Home() {
  const { info, addFun } = useContext(ContextData)
  return (
    <div>
      {
        info.map(item => (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.title} />
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>

            <div className="btn_group">
              <div className="count_btn">
                <button>+</button>
                <span>{item.count}</span>
                <button>-</button>
              </div>

              <div className="action_btn">
                <button><MdFavoriteBorder /></button>
                <button><MdOutlineShoppingCart /></button>
              </div>
            </div>
          </div>
        ))
      }

      <button className="add_btn" onClick={addFun}>➕</button>
    </div>
  )
}

export default Home