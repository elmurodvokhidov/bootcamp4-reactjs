import { useState } from "react";
import { ComponentA } from "./ComponentA";
import ComponentB from "./ComponentB";

function App() {
  const [user, setUser] =  useState('elmurod');

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <ComponentA user={'user'} />
      <ComponentB />
    </div>
  );
}

export default App;
