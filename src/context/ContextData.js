import React, { useState } from 'react'
import { json, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const ContextData = React.createContext();

function ContextFunc({ children }) {
    const [users, setUsers] = useState(
        JSON.parse(localStorage.getItem('users')) || []
    );

    function refresh() {
        setUsers(
            JSON.parse(localStorage.getItem('users')) || []
        )
    };

    const homeNavigate = useNavigate();

    const [input, setInput] = useState({
        username: '',
        password: '',
        img: '',
        id: '',
    });

    function inputFunc(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    function getImage(e) {
        setInput({
            ...input,
            img: URL.createObjectURL(e.target.files[0])
        });
    };

    function addFunction() {
        if (localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([
                ...JSON.parse(localStorage.getItem('users')), { ...input, id: new Date().getTime() }
            ]))
        }
        else {
            localStorage.setItem('users', JSON.stringify([{ ...input, id: new Date().getTime() }]))
        }
        homeNavigate('/')
        refresh();
    }

    // edit function
    function editFun(value) {
        console.log(value)
    }

    // delete function
    function delFun(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem('users', JSON.stringify(
                    users.filter(item => item.id !== id)
                ));
                refresh();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    }

    return (
        <ContextData.Provider value={{
            users,
            setUsers,
            inputFunc,
            getImage,
            addFunction,
            editFun,
            delFun,
        }}>
            {children}
        </ContextData.Provider>
    )
};

export default ContextFunc;