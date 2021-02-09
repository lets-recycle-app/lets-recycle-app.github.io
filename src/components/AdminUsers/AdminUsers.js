/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { getAllData } from '../AdminUtils/makeApiCalls.js';

function AdminUsers() {
  const [users, setUsers] = useState([]);
  useEffect(async () => {
    // This is be executed when `loading` state changes
    const response = await getAllData('admins');
    setUsers(response);
    console.log(response);
  }, []);


  return (
    <div>
      <h2>Users</h2>
      {(() => {
        if (users.length === 0) {
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
                  <th>Full Name</th>
                  <th>User Name</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, n) => <tr key={n}>
                    <td> {user.adminId} </td>
                    <td> {user.adminName} </td>
                    <td> {user.userName} </td>
                  </tr>)}
              </tbody>
            </table>
          );
        }
      })()}
    </div>
  );
}

export default AdminUsers;
