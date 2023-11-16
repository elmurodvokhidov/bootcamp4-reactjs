import React from 'react'

function AddInfo() {
  return (
    <div className='home addInfo'>
      <form>
        <div className="inputGroup">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" />
        </div>
        <div className="inputGroup">
          <label htmlFor="price">Price</label>
          <input type="number" name="price" id="price" />
        </div>
        <div className="inputGroup">
          <label htmlFor="img">Image</label>
          <input type="file" name="img" id="img" />
        </div>

        <button type='button' className='addBtn'>Add</button>
      </form>
    </div>
  )
}

export default AddInfo