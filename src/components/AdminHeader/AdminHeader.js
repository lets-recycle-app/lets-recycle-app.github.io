import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHeader.css';

function AdminHeader() {
  return (
        <header>
            <nav className="navbar">
              <div className="admin-container">
                <Link to="/" >&#9851; <span>Let&apos;s Recycle</span></Link>
              </div>
            </nav>
          </header>
  );
}
export default AdminHeader;
