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
            <div>Welcome, Admin.</div>
          );
        // eslint-disable-next-line
        } else if (user === 'dri') {
          return (
            <div>Welcome, Driver.</div>
          );
        } else {
          return (
            <div>Welcome.</div>
          );
        }
      })()}
    </div>
  );
}

export default AdminWelcome;

/* function AdminWelcome() {
  const location = useLocation();
  const user = location.pathname.slice(1, 4);
  const [objUser, setObjUser] = useState({});
  useEffect(async () => {
    if (user === 'adm') {
      const objAdmin = await getAdminById(1);
      setObjUser(objAdmin);
    }
    if (user === 'dri') {
      const objDriver = await getDriverById(1);
      setObjUser(objDriver);
    }
  }, []);
  return (
    <div className="main-column">
      {(() => {
        if (user === 'adm') {
          return (
            <div>
              <h2>Welcome, {objUser.adminName}.</h2>
              Your permission level is Admin.
            </div>
          );
          // eslint-disable-next-line
        } else if (user === 'dri') {
          return (
            <div>
            <h2>Welcome, {objUser.driverName}.</h2>
            Your permission level is Driver.
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
} */
