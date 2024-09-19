import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  axios.defaults.withCredentials=true
  const handleSubmit = (e) => {
    e.preventDefault(); 
    axios.post("http://localhost:3001/auth/login", { username, password }) 
      .then(result => {
        window.localStorage.setItem("id",result.data.id);
        navigate('/')
        console.log(result)   
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-3 border border-1">
        <h3>Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-control">
              Username
            </label>
            <input
              type="text"
              
              className="form-control"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            login
          </button>
          <Link to="/auth/register">
            <button type="button" className="btn btn-default w-100 mt-2">
              Register
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
