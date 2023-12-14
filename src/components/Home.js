import { Link } from "react-router-dom"
import { useSelector } from "react-redux";

function Home() {
    const state = useSelector(state => state.user);
    console.log(state);
    return (
        <div className="container p-5">
            {
                state.map(item => (
                    <div key={item.id} className="card" style={{ width: "10rem" }}>
                        <div className="card-body text-center">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.major}</p>
                            <Link to="1" className="btn btn-primary">edit</Link>
                            <button className="btn btn-danger">delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home