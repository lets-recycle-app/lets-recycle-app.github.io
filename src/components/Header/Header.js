import './Header.css';
import {
  BrowserRouter as Router,
  NavLink
} from "react-router-dom";
function Header() {
    return (
  
        <header>
        <nav className="navbar">
          <div className="container">
          <a className="navbar-brand" href="/">Let's Recycle</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarCollapse">
            <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" activeClassName="active">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/map" activeClassName="active">Map</NavLink>
              </li>
            </ul>
          </div>
          </div>
    
        </nav>
      </header>
    );
}

export default Header;