import {CorbadoAuth} from "@corbado/react";
import {useNavigate} from "react-router-dom";

function Login()  {
  const navigate = useNavigate()

  return (
    <div>
      <CorbadoAuth onLoggedIn={() => {navigate("/profile")}} />
    </div>
  );
}

export default Login;
