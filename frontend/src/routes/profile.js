import axios from "axios";
import "@corbado/webcomponent";
import "@corbado/webcomponent/pkg/auth_cui.css";
import Corbado from "@corbado/webcomponent";
import { useEffect, useState } from "react";

const Profile = () => {
  console.log("Before");
  const [userID, setUserID] = useState("id");
  const [userName, setUserName] = useState("name");
  const [userEmail, setUserEmail] = useState("mail");
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    // action on update of movies
  }, [userID, userName, userEmail]);
  /*  var projectID = process.env.REACT_APP_CORBADO_PROJECT_ID;
  const session = new Corbado.Session(projectID);

  var handle = () => {
    session
      .logout()
      .then(() => {
        window.location.replace("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  */
  console.log("After 1");

  if (!checked) {
    console.log("userID Before: ", userID);
    axios
      .get(window.location.origin + "/api/profile")
      .then((response) => {
        setUserID(response.data.user_id);
        setUserName(response.data.user_name);
        setUserEmail(response.data.user_email);
        console.log("response.data");
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error");
        console.log(error);
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

      <button id="logoutButton">Logout</button>
    </div>
  );
};

export default Profile;
