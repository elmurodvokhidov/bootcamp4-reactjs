import { useContext } from "react"
import { Context } from "../context/Context"

function Stock() {
    const { products } = useContext(Context)

    return (
        <div className="home stock">
            <div className="wrapper">
                {
                    products
                        .filter(item => {
                            if (item.stock) {
                                return item
                            }
                        })
                        .map((val, ind) => (
                            <div className="card" key={ind}>
                                <span>{val.discount}%</span>
                                <img key={ind} src={val.img} alt="" />
                                <h1>{val.pro_name}</h1>
                                <h3>{val.price}$</h3>
                                <h2>{val.stock ? "➕" : "➖"}</h2>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}

export default Stock