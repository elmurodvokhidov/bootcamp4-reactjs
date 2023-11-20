import React from 'react'
import { ContextData } from '../context/ContextData'
import { useContext } from 'react';
import { FaPlus } from "react-icons/fa6";
import Card from '../tools/Card';

function Home() {
  const { info, addFun } = useContext(ContextData)
  return (
    <div className='home'>
      {
        info.map(item => (
          <Card item={item} />
        ))
      }

      <button className="add_btn" onClick={addFun}><FaPlus /></button>
    </div>
  )
}

export default Home