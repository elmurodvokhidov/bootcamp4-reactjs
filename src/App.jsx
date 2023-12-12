import { useDispatch, useSelector } from "react-redux"
import { addNewUser, decrement, increment } from "./redux/slice/CounterSlice"
import { useState } from "react";
import nextId from "react-id-generator";

function App() {
  const { value } = useSelector(state => state);
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  let id = nextId();

  function addFun() {
    dispatch(addNewUser({ id, name }));
    console.log(user);
  }

  return (
    <>
      <button onClick={() => dispatch(increment())}>inc</button>
      <h1>{value}</h1>
      <button onClick={() => dispatch(decrement())}>dec</button> <br /><br />

      <input onInput={(e) => setName(e.target.value)} type="text" name="name" id="name" placeholder="name..." />
      <button onClick={addFun}>add</button>
      {
        user.map((itm, ind) => (
          <h1 key={ind}>{itm.name}</h1>
        ))
      }
    </>
  )
}

export default App