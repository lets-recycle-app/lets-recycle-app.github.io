import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import DriversListItem from '../DriversListItem/DriversListItem.js';
import 'react-datepicker/dist/react-datepicker.css';
import { makeGetCall } from '../AdminUtils/makeAxiosCalls.js';
import { formatDate } from '../AdminUtils/formatDate.js';

// eslint-disable-next-line
const getDriversItems = async (driverId, date) => {
  // console.log('date= ', date);
  // eslint-disable-next-line
  driverId = '10';
  const url = `https://a0br3o0i7b.execute-api.eu-west-2.amazonaws.com/api/drivers/${driverId}`;
  const data = await makeGetCall(url);
  console.log(data);
  const myArray = [];
  if (data[0].driverName) {
    myArray.push(data[0].driverName);
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
    console.log('drItems= ', drItems, 'dbDate=', dbDate);
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
