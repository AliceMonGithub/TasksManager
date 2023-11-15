import { login } from "../js/userApi";
import { useState } from "react";

function Login() {
  const [data, setData] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <h1>Login</h1>
      <div>{login_alarm(data)}</div>
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <br></br>
      <input
        type="password"
        className="form-control"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br></br>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() =>
          send_login(username, password).then((res) => setData(res.data))
        }
      >
        Login
      </button>
    </div>
  );
}

function login_alarm(data: any) {
  if (data == "") {
    return;
  }

  return (
    <div className="alert alert-danger" role="alert">
      {data}
    </div>
  );
}

function send_login(username: string, password: string) {
  return login(username, password);
}

export default Login;
