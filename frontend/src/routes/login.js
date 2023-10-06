const Login = () => {
  var projectID = process.env.REACT_APP_CORBADO_PROJECT_ID;
  console.log("projectID");
  console.log(projectID);
  console.log("process.env");
  console.log(process.env);

  return (
    <div>
      <corbado-auth project-id={projectID} conditional="yes">
        <input
          name="username"
          id="corbado-username"
          required
          autocomplete="webauthn"
        />
      </corbado-auth>
    </div>
  );
};

export default Login;
