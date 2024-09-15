import React from 'react';
import { Link} from 'react-router-dom'; 

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Food Recipe</a>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/recipe/createdrecipe">Create</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipe/savedrecipe" >Saved Recipe</Link>
            </li> 
          </ul>
          <form className="d-flex" role="search">
            
            <button className="btn btn-outline-success decoration-none " type="submit"><Link to="/auth/register">Register/Login</Link></button>
            
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
