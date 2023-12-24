import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";
import Swal from "sweetalert2";

export default class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/createuser", {
      method: "POST",
      crossDomain: true, 
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "https://localhost:3000",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.error === "User Exists") {
          Swal.fire({
            icon: "error",
            text: "User Already Exists",
          });
        } else if (data.status === "ok") {
          Swal.fire({
            icon: "success",
            text: "You have succesfully created an account",
          });
        } else {
          Swal.fire({
            icon: "error",
            text: "Enter Credentials",
          });
        }
      });
  }
  render() {
    return (
      <>
          <div className="login-form">
            <form class="form" onSubmit={this.handleSubmit}>
              <div class="header">Sign up</div>
              <div class="inputs">
                <input
                  type="email"
                  className="input"
                  placeholder="Email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
                <input
                  type="password"
                  class="input"
                  placeholder="Password"
                  autoComplete="on"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>

              <button type="submit" className="sigin-btn">Sign up</button>
              <p class="signup-link">Already have an account? <Link to="/loginpage">Login</Link></p>
          
            </form>
          </div>
      </>
    );
  }
}