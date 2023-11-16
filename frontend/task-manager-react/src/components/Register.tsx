import { register } from "../js/userApi";
import { useState } from "react";

function Register() {
  const [data, setData] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="register">
      <h1>Register</h1>
      <div>{register_alarm(data)}</div>
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
          send_register(username, password).then((res) => setData(res.data))
        }
      >
        Register
      </button>
    </div>
  );
}

function register_alarm(data: any) {
  if (data == "") {
    return;
  }

  return (
    <div className="alert alert-danger" role="alert">
      {data}
    </div>
  );
}

async function send_register(username: string, password: string) {
  const response = await register(username, password);

  return response;
}

export default Register;
