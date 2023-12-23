import { NavLink } from "react-router-dom"

function Home() {
    return (
        <div>
            <h1>Home page</h1>
            <NavLink to={"profile"}>my account</NavLink>
        </div>
    )
}

export default Home