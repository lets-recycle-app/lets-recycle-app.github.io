import {Link} from "react-router-dom";

function HeaderAdmin() {
return (
        <header>
            <nav className="navbar">
              <div className="container">
                <Link to="/" >&#9851; <span>Let's Recycle</span></Link>
              </div>
            </nav>
          </header>
);
}
export default HeaderAdmin;