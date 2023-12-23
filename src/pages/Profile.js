import { useState } from "react";
import useFetch from "../hooks/useFetch";
import ProfileModal from "./ProfileModal";

function Profile() {
    const [modal, setModal] = useState(true);
    const [data] = useFetch("http://localhost:5000/users");

    return (
        <div>
            {
                modal ? <ProfileModal /> :
                <div>
                    <h1>Successfully registered!</h1>
                </div>
            }
        </div>
    )
}

export default Profile