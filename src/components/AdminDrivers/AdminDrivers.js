import React, { useState, useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { getAllData } from '../AdminUtils/makeApiCalls.js';

function AdminDrivers() {
  const [drivers, setDrivers] = useState([]);

  useEffect(async () => {
    // This is be executed when `loading` state changes
    const response = await getAllData('drivers');
    setDrivers(response);
  }, []);

  return (
    <div>
      <h2>Drivers</h2>
      {(() => {
        if (drivers.length === 0) {
          return (
            <p>No records found.</p>
          );
          // eslint-disable-next-line
        } else {
          return (
            <table>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Depot</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver, n) => <tr key={n}>
                    <td> {driver.driverId} </td>
                    <td> {driver.driverName} </td>
                    <td> {driver.depotId} </td>
                  </tr>)}
              </tbody>
            </table>
          );
        }
      })()}
    </div>
  );
}

export default AdminDrivers;
