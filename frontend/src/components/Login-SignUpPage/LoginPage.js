import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import "./LoginPage.css"

const LoginPage = () => {
//   const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(email, password);
    fetch("http://localhost:5000/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })

      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status === "ok") {
        //   navigate("/homepage");
          Swal.fire({
            icon: "success",
            text: "You have succesfully logged in",
          });
        } else if(!email || !password){
          Swal.fire({
            icon: "error",
            text: "Enter Credentials",
          });         
        }else{
          Swal.fire({
            icon: "warning",
            title:"Invalid credentials!",
        })
        }
      });
  };

  return (
    <div className="login-form">
      <form className="form" onSubmit={handleSubmit}>
        <div className="header" >Sign In </div>
          <div className="inputs">
            <input
              type="email"
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="input"
              placeholder="Password"
              autoComplete="on"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="sigin-btn">Submit</button>
          <p class="signup-link">Don't have an account? <Link to="/signuppage">Sign up</Link></p>
</form>
    </div>
  );
};

export default LoginPage;