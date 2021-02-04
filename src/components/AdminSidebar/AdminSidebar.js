import React from 'react';
import { useLocation } from 'react-router-dom';
import AdminMenu from '../AdminMenu/AdminMenu.js';

function AdminSidebar() {
  const location = useLocation();
  const user = location.pathname.slice(1, 4);
  return (
    <div className="mobile-hidden">
        <AdminMenu user = {user}/>
    </div>
  );
}

export default AdminSidebar;
