import React, { useState } from 'react';
import { hardcodedRequests } from '../AdminCollectionRequests/CollectionRequestsData.js';
import DriversListItem from '../DriversListItem/DriversListItem.js';

function AdminDriversList() {
  const now = new Date().toISOString().substring(0, 19).replace('T', ' ');
  const [dateSelected, setDateSelected] = useState(now);
  let storageItems = [];
  if (localStorage.getItem('colRequest')) {
    storageItems = JSON.parse(localStorage.getItem('colRequest'));
    storageItems = storageItems.reverse();
  }
  // console.log(storageItems);
  const hardcodedItems = hardcodedRequests.requests;
  const allItems = storageItems.concat(hardcodedItems);
  // console.log(allItems);
  const [driversItems] = useState(allItems);

  // get items with todays date and driver's id
  // const todaysDriversItems = dirversItems.filter(item => item.datetime === "2020-12-17" && item.driverId === 3);
  const todaysDriversItems = driversItems;

  return (
    <div className="main-column">
      <h1>Your todays route is listed below.</h1>
      <form>
        <div className="form-row">
          <label htmlFor="id">Select another date:</label>
          <div>
            <input
              type="text"
              id="dateSelected"
              name="dateSelected"
              value={dateSelected}
              onChange={(e) => setDateSelected({ value: e.target.value })}
            />
          </div>
        </div>
      </form>

      { todaysDriversItems.map((item) => <DriversListItem
        key={item.id}
        id={item.id}
        name={item.name}
        email={item.email}
        houseNo={item.houseNo}
        street={item.street}
        town={item.town}
        postcode={item.postcode}
        completed={item.completed}
        errandType={item.errandType}
        appliance={item.appliance}
        locationType={item.locationType}
        notes={item.notes}
      />)}
    </div>
  );
}

export default AdminDriversList;
