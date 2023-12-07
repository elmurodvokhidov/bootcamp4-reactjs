import React, { useContext } from 'react'
import { ContextData } from '../context/ContextData'

function AddInfo() {
  const { inputFun, addFunction } = useContext(ContextData);

  return (
    <div className='home addInfo'>
      <form>
        <div className="inputGroup">
          <label htmlFor="title">Title</label>
          <input onInput={inputFun} type="text" name="title" id="title" />
        </div>
        <div onInput={inputFun} className="inputGroup">
          <label htmlFor="price">Price</label>
          <input onInput={inputFun} type="number" name="price" id="price" />
        </div>
        <div className="inputGroup">
          <label htmlFor="img">Image</label>
          <input type="file" name="img" id="img" />
        </div>

        <button onClick={addFunction} type='button' className='addBtn'>Add</button>
      </form>
    </div>
  )
}

export default AddInfo