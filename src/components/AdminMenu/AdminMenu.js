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
          <NavLink exact to="/admin">Dashboard</NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink to="/admin/map">Depot Map</NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink to="/admin/depots">Depots</NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink to="/admin/drivers">Drivers</NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink to="/admin/postcode">PostCodes</NavLink>
        </li>
        <li className="admin-menu-item">
          <NavLink to="/admin/users">Users</NavLink>
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
