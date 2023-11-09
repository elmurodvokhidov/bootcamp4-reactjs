import { useContext } from 'react';
import style from './Admins.module.css';
import { ContextData } from '../../context/ContextData';

function Admins() {
  const {clickBtn} = useContext(ContextData)

  return (
    <div>
      <h1 className={style.heading}>Admins</h1>
      <button onClick={clickBtn}>click me!</button>
    </div>
  )
}

export default Admins