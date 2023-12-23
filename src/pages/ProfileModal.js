import { useState } from "react";

function ProfileModal() {
    const [errorMessage, setErrorMessage] = useState();

    function validation(element) {
        let error = "";
        if (!element.username) {
            error = "Username kiritilishi shart!"
        }
        else if (element.username.trim().length < 5) {
            error = "Username 5 ta belgidan kam bo'lmasin!"
        }

        if (!element.password) {
            error = "Parol kiritilishi shart!"
        }
        else if (element.password.trim().length < 8) {
            error = "Parol 8 ta belgidan kam bo'lmasin!"
        }
        return error;
    };

    const [inputValue, setInputValue] = useState({
        id: "",
        username: "",
        email: "",
        password: "",
    });

    function getInputValue(e) {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    };

    function handleSubmit() {
        setErrorMessage(validation(inputValue))
        // fetch({ url: "http://localhost:5000/users", method: "post", data: inputValue })
    }

    return (
        <form className="container">
            <h1>Register</h1>
            <input onChange={(e) => getInputValue(e)} type="text" name="username" id="username" placeholder="Enter your username" /> <br />
            <span className="text-danger">{errorMessage}</span> <br /><br />
            <input onChange={(e) => getInputValue(e)} type="email" name="email" id="email" placeholder="Enter your email" /> <br /><br />
            <input onChange={(e) => getInputValue(e)} type="password" name="password" id="password" placeholder="Enter your password" /> <br />
            <span className="text-danger">{errorMessage}</span> <br /><br />
            <button type="button" onClick={() => handleSubmit()}>register</button>
        </form>
    )
}

export default ProfileModal