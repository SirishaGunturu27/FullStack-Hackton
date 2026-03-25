import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [u,setU]=useState("");
  const [p,setP]=useState("");
  const nav=useNavigate();

  const login=()=>{
    axios.post("http://localhost:8080/api/auth/login",{
      username:u,
      password:p
    })
    .then(res=>{
      localStorage.setItem("user",JSON.stringify(res.data));
      nav("/home");
    })
    .catch(()=>alert("Invalid"));
  };

  return (
  <div className="center-login">
    <div className="login-box">
      <h3>Login</h3>

      <input
        placeholder="Username"
        onChange={e => setU(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setP(e.target.value)}
      />

      <button onClick={login}>Login</button>
    </div>
  </div>
);
}

export default Login;