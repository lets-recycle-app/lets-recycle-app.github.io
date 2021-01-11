import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminSidebar.css';

function AdminSidebar() {
  return (
    <div>
    <ul className="admin-menu">
        <li className="admin-menu-item">
            <NavLink exact to="/admin">Route Data</NavLink>
        </li>
        <li className="admin-menu-item">
            <NavLink to="/admin/map">Depot Map</NavLink>
        </li>
        <li className="admin-menu-item">
            <NavLink to="/admin/postcode">PostCodes</NavLink>
        </li>
        <li className="admin-menu-item">
            <NavLink to="/admin/drivers-list">Driver&apos;s list</NavLink>
        </li>
        <li className="admin-menu-item">
            <NavLink to="/admin/counter">Test Counter</NavLink>
        </li>
        <li className="admin-menu-item">
            <NavLink to="/admin/all-requests">All Collection Requests</NavLink>
        </li>
    </ul>
    </div>
  );
}

export default AdminSidebar;
