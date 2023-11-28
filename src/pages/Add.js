import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ContextData } from "../context/ContextData"

function Add() {
    const { inputFunc, getImage, addFunction } = useContext(ContextData);

    return (
        <div className="add">
            <NavLink to={'/'}>exit</NavLink>
            <h1>Add worker</h1>
            <form>
                <input onInput={(e) => inputFunc(e)} type="text" name="username" id="username" placeholder="Enter your Username" /> <br />
                <input onInput={(e) => inputFunc(e)} type="password" name="password" id="password" placeholder="Enter your  Password" /> <br />
                <input onInput={(e) => getImage(e)} type="file" name="img" id="img" /> <br /><br />

                <button onClick={addFunction} type="button">Add worker</button>
            </form>
        </div>
    )
}

export default Add