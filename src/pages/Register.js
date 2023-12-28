import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loginError, loginStart, loginSuccess } from '../slice/authslice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const { isLoading, isLogged } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    function getInputVal(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    async function handleRegister(e) {
        e.preventDefault();
        dispatch(loginStart());
        try {
            const { data } = await axios.post("https://api.realworld.io/api/users", { user });
            dispatch(loginSuccess(data.user));
        } catch (error) {
            dispatch(loginError(error.response.data.errors));
        }
    };

    useEffect(() => {
        if (isLogged) {
            navigate("/")
        }
    }, [isLogged, navigate]);

    return (
        <div className="row justify-content-center align-items-center vh-100">
            <form onSubmit={(e) => handleRegister(e)} className="col-4 d-flex flex-column gap-3">
                <h1 className="text-center">Register</h1>
                <div className="form-floating">
                    <input onChange={(e) => getInputVal(e)} name="username" type="text" className="form-control" id="floatingInput" placeholder="..." />
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input onChange={(e) => getInputVal(e)} name="email" type="email" className="form-control" id="floatingEmail" placeholder="..." />
                    <label htmlFor="floatingEmail">Email</label>
                </div>
                <div className="form-floating">
                    <input onChange={(e) => getInputVal(e)} name="password" type="password" className="form-control" id="floatingPassword" placeholder="..." />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <button className="btn btn-dark w-100 py-3" disabled={isLoading}>{isLoading ? "Loading..." : "Register"}</button>
            </form>
        </div>
    )
}

export default Register