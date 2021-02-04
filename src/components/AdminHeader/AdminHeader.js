import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import AdminMenu from '../AdminMenu/AdminMenu.js';
import './AdminHeader.css';

function AdminHeader() {
  const location = useLocation();
  const user = location.pathname.slice(1, 4);
  // console.log(location.pathname);
  const [menuState, setMenuState] = useState('close');
  const showHideMenu = () => {
    if (menuState === 'close') { setMenuState('open'); }
    if (menuState === 'open') { setMenuState('close'); }
  };
  return (
    <React.Fragment>
      <header>
        <nav className="navbar">
          <div className="admin-container">
            <Link to="/" >&#9851; <span>Let&apos;s Recycle</span></Link>
            <span className="mobile-visible" >
              <span className={`hamburger-icon ${menuState}`} onClick={showHideMenu}></span>
            </span>
          </div>
        </nav>
      </header>
      <div hidden={menuState === 'open' ? '' : 'hidden'}>
        < AdminMenu user={user} />
      </div>
    </React.Fragment>
  );
}
export default AdminHeader;
