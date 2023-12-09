import { useContext } from "react"
import { Context } from "../context/Context"
import { NavLink } from "react-router-dom";

function Home() {
  const { products } = useContext(Context);

  return (
    <div className="home">
      <div className="wrapper">
        {
          products
            .map((val, ind) => (
              <div className="card" key={ind} style={{ background: val.color }}>
                <img src={val.image} alt={val.title} />
                <h3>{val.title}</h3>
                <h2>{val.price}$</h2>
                <NavLink to={`${val.id}`}>View more</NavLink>
              </div>
            ))
        }
      </div>
      {/* <div className="btn-group">
        <button onClick={() => setPageNum(1)}>1</button>
        <button onClick={() => setPageNum(2)}>2</button>
      </div> */}
    </div>
  )
}

export default Home