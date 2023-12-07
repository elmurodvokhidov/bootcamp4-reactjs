import { useContext } from "react"
import { Context } from "../context/Context"

function Home() {
  const { products, setPageNum } = useContext(Context);

  return (
    <div className="home">
      <div className="wrapper">
        {
          products
            .map((val, ind) => (
              <div className="card" key={ind} style={{ background: val.color }}>
                <h1>{val.name}</h1>
                <h3>{val.year}</h3>
                <h2>➖</h2>
              </div>
            ))
        }
      </div>
      <div className="btn-group">
        <button onClick={() => setPageNum(1)}>1</button>
        <button onClick={() => setPageNum(2)}>2</button>
      </div>
    </div>
  )
}

export default Home