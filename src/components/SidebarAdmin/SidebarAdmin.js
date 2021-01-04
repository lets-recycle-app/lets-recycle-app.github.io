import {NavLink} from "react-router-dom";
import "./SidebarAdmin.css";

function SidebarAdmin() {
    return (
    <div className="side-column">
    <ul className="admin-menu">
        <li className="admin-menu-item">
            <NavLink exact to="/admin">Dashboard</NavLink>
        </li>
        <li className="admin-menu-item">
            <NavLink to="/admin/map">Map</NavLink>
        </li>
        <li className="admin-menu-item">
            <NavLink to="/admin/drivers-list">Driver's list</NavLink>
        </li>
    </ul>
    </div>
    );
}

export default SidebarAdmin;