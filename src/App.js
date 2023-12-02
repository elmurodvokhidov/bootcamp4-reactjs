import { useReducer } from "react";

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    switch (action.type) {
      case "inc": return state + 1;
      case "dec": return state - 1;
      default: return state;
    }
  }

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "inc" })}>inc</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "dec" })}>dec</button>
    </div>
  );
}

export default App;
