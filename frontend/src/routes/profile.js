import axios from "axios";
import {useCorbado} from "@corbado/react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function Profile() {
    const [userID, setUserID] = useState("loading...");
    const [userName, setUserName] = useState("loading...");
    const [userEmail, setUserEmail] = useState("loading...");
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate()
    const { logout } = useCorbado()

    async function handleLogout() {
        console.log("Logout")
        try {
            await logout()
        } finally {
            navigate("/login")
        }
    }

    if (!checked) {
        axios
            .get(window.location.origin + "/api/profile")
            .then((response) => {
                console.log(response.data);
                setUserID(response.data.user_id);
                setUserName(response.data.user_name);
                setUserEmail(response.data.user_email);
            })
            .catch((error) => {
                console.log(error);
                setUserID("Unauthorized");
                setUserName("Unauthorized");
                setUserEmail("Unauthorized");
            });
        setChecked(true);
    }

    return (
        <div>
            <h2>:/protected 🔒</h2>
            <p>User ID: {userID}</p>
            <p>Name: {userName}</p>
            <p>Email: {userEmail}</p>

            <button id="logoutButton" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Profile;