import React from 'react';
import { useLocation } from 'react-router-dom';

function AdminWelcome() {
  const location = useLocation();
  const user = location.pathname.slice(1, 4);

  return (
    <div className="main-column">
      {(() => {
        if (user === 'adm') {
          return (
            <div>Welcome Admin</div>
          );
        // eslint-disable-next-line
        } else if (user === 'dri') {
          return (
            <div>Welcome Driver</div>
          );
        } else {
          return (
            <div>Welcome</div>
          );
        }
      })()}
    </div>
  );
}

export default AdminWelcome;
