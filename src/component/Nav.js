import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Nav() {
  const navigate = useNavigate()
  const handleLogout=()=>{
    window.localStorage.clear()
    axios.get('/http://locallhost:3001/auth/logout')
    .then(result =>navigate('/')
    ).catch(err=> console.log(err))
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          Food Recipe
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/recipe/createdrecipe"
              >
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipe/savedrecipe">
                Saved Recipe
              </Link>
            </li>
          </ul>
          {window.localStorage.getItem("token") ? (
            <button className="btn btn-outline-light" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <button className="btn btn-outline-light">
              <Link to="/auth/register" className="text-decoration-none">
                Register/Login
              </Link>
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
