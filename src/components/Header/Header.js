import "./Header.css";
import {Link, NavLink} from "react-router-dom";

function Header() {
    return (
        <header>
        <nav className="navbar">
          <div className="container">
            <Link to="/" >&#9851; <span>Let's Recycle</span></Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" activeClassName="active">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/admin" activeClassName="active">Admin</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
}

export default Header;