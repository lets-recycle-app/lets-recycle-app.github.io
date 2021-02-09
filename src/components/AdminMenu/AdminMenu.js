import React from 'react';
import { NavLink } from 'react-router-dom';
import './AdminMenu.css';

function AdminMenu(props) {
  return (
    <div className="">
      <ul
        className="admin-menu"
        hidden={props.user !== undefined && props.user === 'adm' ? '' : 'hidden'}
      >
        <li className="admin-menu-item">
          <NavLink exact to="/admin">Admin Home</NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink to="/admin/map">Depot Maps</NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink to="/admin/depots">Depot List</NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink to="/admin/drivers">Driver List</NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink to="/admin/users">Admin Users</NavLink>
        </li>
        {/*         <li className="admin-menu-item">
<NavLink to="/admin/counter">Test Counter</NavLink>
</li> */}
      </ul>
      <ul
        className="admin-menu"
        hidden={props.user !== undefined && props.user === 'dri' ? '' : 'hidden'}
      >
        <li className="admin-menu-item">
          <NavLink exact to="/driver">Dashboard</NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink to="/driver/list">Driver&apos;s list</NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink to="/driver/map">Driver&apos;s Map</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AdminMenu;
