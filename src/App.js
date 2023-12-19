import axios from "axios";
import { useEffect, useState } from "react";
import getUID from "uid-generator-package";

function App() {
  const [users, setUsers] = useState(null);
  const [error, setError] = useState('');
  const [user, setUser] = useState({
    id: '',
    name: '',
    age: ''
  });

  function getUser(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  function getUsers() {
    axios.get("http://localhost:5000/users")
      .then((response) => setUsers(response.data))
      .catch(err => setError(err.message))
  };

  useEffect(() => {
    getUsers();
  }, []);

  function editFunction(item) {
    setUser({
      id: item.id,
      name: item.name,
      age: item.age
    })
  }

  function addFunction() {
    if (user.name.length > 0) {
      if (user.id === '') {
        axios.post("http://localhost:5000/users", { ...user, id: getUID() });
      }
      else {
        axios.put(`http://localhost:5000/users/${user.id}`, user);
      }
      setUser({
        name: '',
        age: ''
      });
      getUsers();
    }
    else {
      alert('Please fill in the all blanks!')
    }
  }

  return (
    <div className="App">
      <input
        type="text"
        name="name"
        id="name"
        value={user.name}
        onChange={(e) => getUser(e)}
      />
      <input
        type="number"
        name="age"
        id="age"
        value={user.age}
        onChange={(e) => getUser(e)}
      />
      <button onClick={addFunction}>add</button>
      <ol>
        {
          error ? <h1>{error}</h1> :
            users?.map(item => (
              <li style={{ cursor: 'pointer' }} onClick={() => editFunction(item)} key={item.id}>{item.name}</li>
            ))
        }
      </ol>
    </div>
  );
}

export default App;
