import { NavLink } from "react-router-dom"
import Sidebar from "./Sidebar"
import { useContext } from "react"
import { ContextData } from "../context/ContextData"

function Home() {
    const { users } = useContext(ContextData);

    return (
        <div className="home">
            <Sidebar />
            <header>
                <footer>
                    <input type="text" name="search" id="search" placeholder="Search" />
                    <NavLink to={'add'}>Add</NavLink>
                </footer>
            </header>
            <main>
                <table>
                    <thead>
                        <tr>
                            <th>num</th>
                            <th>image</th>
                            <th>username</th>
                            <th>password</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.img}</td>
                                    <td>{value.username}</td>
                                    <td>{value.password}</td>
                                    <td>
                                        <button>edit</button>
                                        <button>delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default Home