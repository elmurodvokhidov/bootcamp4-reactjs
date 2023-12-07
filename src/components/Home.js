import { useContext, useState } from "react"
import { Context } from "../context/Context"

function Home() {
  const { products, category, setCategory } = useContext(Context);

  const [search, setSearch] = useState("");
  console.log(search);

  return (
    <div className="home">
      <div className="filter">
        <input onChange={() => setCategory("")} type="radio" name="color" id="0" />
        <label htmlFor="0">all</label>

        <input onChange={() => setCategory("phone")} type="radio" name="color" id="a" />
        <label htmlFor="a">phone</label>

        <input onChange={() => setCategory("tv")} type="radio" name="color" id="b" />
        <label htmlFor="b">tv</label>

        <input onChange={() => setCategory("laptop")} type="radio" name="color" id="c" />
        <label htmlFor="c">laptop</label>

        <input onInput={(e) => setSearch(e.target.value)} type="text" name="search" id="search" placeholder="search..." />
      </div>
      <div className="wrapper">
        {
          products
            .filter(item => {
              if (category === item.category && item.pro_name.toLowerCase().includes(search.toLowerCase())) return item
              else if (category === "" && item.pro_name.toLowerCase().includes(search.toLowerCase())) return item
            })
            .map((val, ind) => (
              <div className="card" key={ind}>
                <span>{val.discount}%</span>
                <img key={ind} src={val.img} alt="" />
                <h1>{val.pro_name}</h1>
                <h3>{Math.round(val.price - ((val.price / 100) * val.discount))}$<del>{val.price}$</del></h3>
                <h2>{val.stock ? "➕" : "➖"}</h2>
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default Home