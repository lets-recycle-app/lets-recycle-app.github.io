import React from 'react';
import { hardcodedRequests } from './CollectionRequestsData.js';

function AdminCollectionRequests() {
  let storageItems = [];
  if (localStorage.getItem('colRequest')) {
    storageItems = JSON.parse(localStorage.getItem('colRequest'));
    storageItems = storageItems.reverse();
  }
  // console.log(storageItems);
  const hardcodedItems = hardcodedRequests.requests;
  const allItems = storageItems.concat(hardcodedItems);
  // console.log(allItems);

  return (
        <div className="main-column">
          <h1>All requests are listed below.</h1>
          { allItems.map((item) => <p>
            key: {item.id} <br/>
            id: {item.id} <br/>
            name: {item.name} <br/>
            email: {item.email} <br/>
            houseNo: {item.houseNo} <br/>
            street: {item.street} <br/>
            town: {item.town} <br/>
            postcode: {item.postcode} <br/>
            completed: {item.completed} <br/>
            appliance: {item.appliance} <br/>
            locationType: {item.locationType} <br/>
            notes: {item.notes}<br/>
            errandType: {item.errandType} <br/>
            completed: {item.completed}<br/>
            datetimeCompleted: {item.datetimeCompleted}<br/>
            longitude: {item.longitude}<br/>
            latitude: {item.latitude}<br/>
            driverId: {item.driverId}<br/>
            waitingList: {item.waitingList}<br/>
            assignedDate: {item.assignedDate}
            </p>)}
        </div>
  );
}

export default AdminCollectionRequests;
