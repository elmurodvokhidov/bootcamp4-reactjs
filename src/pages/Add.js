import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { ContextData } from "../context/ContextData"
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

function Add() {
    const { inputFunc, getImage, addFunction, input, foo } = useContext(ContextData);

    const [pass, setPass] = useState(false);

    return (
        <div className="add">
            <NavLink to={'/'}>exit</NavLink>
            <h1>{foo ? 'Add' : 'Edit'} worker</h1>
            <form style={{ position: 'relative', width: 'fit-content' }}>
                <input onInput={(e) => inputFunc(e)} value={input.username} type="text" name="username" id="username" placeholder="Enter your Username" /> <br />
                <input onInput={(e) => inputFunc(e)} value={input.password} type={pass ? 'text' : 'password'} name="password" id="password" placeholder="Enter your  Password" /> <br />
                <div onClick={() => setPass(!pass)} style={{position: 'absolute', top: '23.5px', right: '90px', cursor: 'pointer' }}>{pass ? <IoEyeOffOutline /> : <IoEyeOutline />}</div> <br />
                <input onInput={(e) => getImage(e)} type="file" name="img" id="img" /> <br /><br />

                <button onClick={addFunction} type="button">{foo ? 'Add' : 'Edit'} worker</button>
            </form>
        </div>
    )
}

export default Add