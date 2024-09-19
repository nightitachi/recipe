import React from 'react'; 
import { Link} from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to={'/'}>Food Recipe</Link>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/recipe/createdrecipe">Create</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/recipe/savedrecipe" >Saved Recipe</Link>
            </li> 
          </ul>
          <button className="btn btn-outline-success text-decoration-none " type="submit"><Link to="/auth/register">Register/Login</Link></button>

        </div>
      </div>
    </nav>
  );
}

export default Nav;
