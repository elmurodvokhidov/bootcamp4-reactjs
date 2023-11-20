import { useContext } from "react"
import { ContextData } from "../context/ContextData"
import Card from "../tools/Card";

function Favorite() {
  const { like } = useContext(ContextData);

  return (
    <div className='home'>
      {
        like.length > 0 ? like.map(item => (
          <Card item={item} />
        )) : <h1 style={{ width: '1600px', color: 'red', textAlign: 'center', paddingTop: '50px' }}>Mahsulot topilmadi!</h1>
      }
    </div>
  )
}

export default Favorite