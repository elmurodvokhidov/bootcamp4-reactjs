import { NavLink } from "react-router-dom"

function Add() {
    return (
        <div className="add">
            <NavLink to={'/'}>exit</NavLink>
            <h1>Add worker</h1>
            <form>
                <input type="text" name="username" id="username" placeholder="Enter your Username" /> <br />
                <input type="password" name="password" id="password" placeholder="Enter your  Password" /> <br />
                <input type="file" name="img" id="img" /> <br /><br />

                <button type="button">Add worker</button>
            </form>
        </div>
    )
}

export default Add