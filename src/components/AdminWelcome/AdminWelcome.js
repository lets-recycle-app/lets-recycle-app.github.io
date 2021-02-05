import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getDriverById, getAdminById } from '../AdminUtils/makeApiCalls.js';

function AdminWelcome() {
  const location = useLocation();
  const user = location.pathname.slice(1, 4);
  const [objAdmin, setObjAdmin] = useState({});
  const [objDriver, setObjDriver] = useState({});
  useEffect(async () => {
    const respAdm = await getAdminById(1);
    const respDri = await getDriverById(1);
    setObjAdmin(respAdm);
    setObjDriver(respDri);
  }, []);
  return (
    <div className="main-column">
      {(() => {
        if (user === 'adm') {
          return (
            <div>
              <h2>Welcome, {objAdmin.adminName}.</h2>
              Your permission level is Admin.
              <br />
            </div>
          );
          // eslint-disable-next-line
        } else if (user === 'dri') {
          return (
            <div>
              <h2>Welcome, {objDriver.driverName}.</h2>
            Your permission level is Driver.
              <br />
            </div>
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
