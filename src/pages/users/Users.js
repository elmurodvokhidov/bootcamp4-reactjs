import { useContext } from 'react';
import style from './Users.module.css';
import { ContextData } from '../../context/ContextData';

function Users() {
  const {user} = useContext(ContextData);

  return (
    <div>
      <h1 className={style.heading}>Users</h1>
      <button onClick={() => console.log(user)}>log</button>
    </div>
  )
}

export default Users