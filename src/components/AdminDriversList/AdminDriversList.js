import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import DriversListItem from '../DriversListItem/DriversListItem.js';
import 'react-datepicker/dist/react-datepicker.css';
import { makeGetCall } from '../AdminUtils/makeAxiosCalls.js';
import formatDate from '../AdminUtils/formatDate.js';

const names = ['Mary Brown', 'Elizabeth Smith', 'Una Atchley', 'Wilma Tibbs', 'Pia Rucker', 'Tiny Litwin', 'Cameron Amon', 'Jarred Bartos', 'Leisha Tuthill', 'Ismael Pietsch', 'Casandra Lipsett', 'Ardella Bono', 'Saturnina Grenz', 'Amada Rees', 'Derek Sybert', 'Claudette Ruby', 'Trey Norden', 'Merlene Nygren', 'Jackson Catto', 'Breana Becker', 'Madlyn Aaronson'];
const streets = ['Brown St', 'Red Rd', 'Oak St', 'Leafy St', 'Green St', 'White Rd', 'Grend Ave', 'Randall Close', 'Bridge St', 'Bank Lane', 'West St'];
const locations = ['public area', 'private property'];
// const towns = ['Oakton', 'Smallville', 'Greentown', 'Smalltown', 'Hightown', 'Lowtown', 'Northport', 'Westport', 'Eastport', 'Southport'];

// eslint-disable-next-line
const getDriversItems = async (driverId, date) => {
  const url = `https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/routes?driverId=${driverId}&routeDate=${date}`;
  const data = await makeGetCall(url);
  console.log(data);
  let myArray = [];
  if (data.result.length > 0) {
    myArray = data.result;
  }
  return myArray;
};

function AdminDriversList() {
  const now = new Date();
  const [startDate, setStartDate] = useState(now);
  const [formatedDate, setFormatedDate] = useState(formatDate(now));
  const [dbDate, setDbDate] = useState(formatDate(now, 'db'));
  const [driversItems, setDriversItems] = useState([]);
  useEffect(async () => {
    // This is be executed when `loading` state changes
    const drItems = await getDriversItems(1, dbDate);
    // console.log('drItems= ', drItems, 'dbDate=', dbDate);
    const arrItemsAddress = [];
    // eslint-disable-next-line
    for (const item of drItems) {
      let name = '';
      let locationType = '';
      let email = '';
      let street = streets[Math.floor(Math.random() * streets.length)];
      let houseNo = Math.floor(Math.random() * 100);
      if (item.routeAction === 'depot') {
        street = 'Depot';
        houseNo = 'AO';
        locationType = 'depot';
      } else {
        locationType = locations[Math.floor(Math.random() * locations.length)];
        if (locationType === 'private property') {
          name = names[Math.floor(Math.random() * names.length)];
          email = 'aaa@aa.aa';
        }
      }
      // let town = towns[Math.floor(Math.random() * towns.length)];

      const objItem = {
        refNo: item.refNo,
        name,
        email,
        houseNo,
        street,
        town: 'Greentown',
        addressPostcode: item.addressPostcode,
        status: item.status,
        routeAction: item.routeAction,
        appliance: item.itemType,
        locationType,
        notes: item.notes,
      };
      arrItemsAddress.push(objItem);
    }
    setDriversItems(arrItemsAddress);
  }, [dbDate]);

  const handleForm = (e) => {
    e.preventDefault();
    // call for route items for this date ??
    setDriversItems([]);
    setFormatedDate(formatDate(startDate));
    setDbDate(formatDate(startDate, 'db'));
  };

  return (
    <div className="main-column">
      <h1>Your {formatDate(now) === formatedDate ? `todays (${formatedDate})` : `${formatedDate}`} route is listed below.</h1>
      <form onSubmit={handleForm} >
        <div className="form-row">
          <label htmlFor="id">Select another date:</label>
          <div className="datePickerWrap">
            <DatePicker
              id="dateSelected"
              name="dateSelected"
              selected={startDate}
              onChange={date => setStartDate(date)} // eslint-disable-line
              dateFormat="dd-MM-yyyy"
            />
          </div>
          <button type="submit">Confirm</button>
        </div>
      </form>
      {driversItems.length === 0 ? 'No items found for this date.' : ''}
      { driversItems.map((item, n) => <DriversListItem
        key={n}
        refNo={item.refNo}
        name={item.name}
        email={item.email}
        houseNo={item.houseNo}
        street={item.street}
        town={item.town}
        postcode={item.addressPostcode}
        status={item.status}
        routeAction={item.routeAction}
        appliance={item.appliance}
        locationType={item.locationType}
        notes={item.notes}
      />)}
    </div>
  );
}

export default AdminDriversList;
