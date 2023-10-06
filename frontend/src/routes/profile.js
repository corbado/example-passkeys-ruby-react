import axios from "axios";
import "@corbado/webcomponent/pkg/auth_cui.css";
import Corbado from "@corbado/webcomponent";
import { useEffect, useState } from "react";

const Profile = () => {
  console.log("Before");
  const [userID, setUserID] = useState("loading...");
  const [userName, setUserName] = useState("loading...");
  const [userEmail, setUserEmail] = useState("loading...");
  const [checked, setChecked] = useState(false);
  useEffect(() => {}, [userID, userName, userEmail]);
  var projectID = process.env.REACT_APP_CORBADO_PROJECT_ID;

  const session = new Corbado.Session(projectID);

  var handle = () => {
    session
      .logout()
      .then(() => {
        window.location.replace("/login");
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
    console.log("userID After: ", userID);
    setChecked(true);
  }

  return (
    <div>
      <h2>:/protected 🔒</h2>
      <p>User ID: {userID}</p>
      <p>Name: {userName}</p>
      <p>Email: {userEmail}</p>

      <button id="logoutButton" onClick={handle}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
