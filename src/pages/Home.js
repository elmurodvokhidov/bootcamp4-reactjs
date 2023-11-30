import { NavLink } from "react-router-dom"
import Sidebar from "./Sidebar"
import { useContext } from "react"
import { ContextData } from "../context/ContextData"

function Home() {
    const { users, editFun, delFun, setFoo, search, setSearch } = useContext(ContextData);

    return (
        <div className="home">
            <Sidebar />
            <header>
                <footer>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" name="search" id="search" placeholder="Search" />
                    <NavLink to={'add'} onClick={() => setFoo(true)}>Add</NavLink>
                </footer>
            </header>
            <main>
                <table border='1px solid black' cellSpacing="0">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>image</th>
                            <th>username</th>
                            <th>password</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length > 0 ?
                                users.filter(item => {
                                    if (item.username.includes(search)) return item
                                })
                                    .map((value, index) => (
                                        <tr key={index}>
                                            <td>{value.id}</td>
                                            <td><img style={{ width: '50px', height: '50px', borderRadius: '50%' }} src={value.img} alt={value.username} /></td>
                                            <td>{value.username}</td>
                                            <td>{value.password}</td>
                                            <td>
                                                <button onClick={() => editFun(value)} style={{ backgroundColor: 'blue', color: 'white' }}>edit</button>
                                                <button onClick={() => delFun(value.id)} style={{ backgroundColor: 'red', color: 'white' }}>delete</button>
                                            </td>
                                        </tr>
                                    )) : <tr><td colSpan={10}><h1 style={{ color: 'red' }}>Information not found!</h1></td></tr>
                        }
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default Home