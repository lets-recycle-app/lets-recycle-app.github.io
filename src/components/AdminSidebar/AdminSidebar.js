import {NavLink} from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar() {
    return (
    <div className="side-column">
    <ul className="admin-menu">
        <li className="admin-menu-item">
            <NavLink exact to="/admin">Route Data</NavLink>
        </li>
        <li className="admin-menu-item">
            <NavLink to="/admin/map">Depot Map</NavLink>
        </li>
        <li className="admin-menu-item">
            <NavLink to="/admin/drivers-list">Driver's list</NavLink>
        </li>
    </ul>
    </div>
    );
}

export default AdminSidebar;