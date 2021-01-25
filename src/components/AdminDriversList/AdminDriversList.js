import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import DriversListItem from '../DriversListItem/DriversListItem.js';
import 'react-datepicker/dist/react-datepicker.css';

const formatDate = (myDate) => {
  let day = myDate.getDate();
  if (day < 10) { day = `0${day}`; }
  let month = (myDate.getMonth() + 1);
  if (month < 10) { month = `0${month}`; }
  const year = myDate.getFullYear();
  return `${day}-${month}-${year}`;
};

let storageItems = [];
if (localStorage.getItem('colRequest')) {
  storageItems = JSON.parse(localStorage.getItem('colRequest'));
  storageItems = storageItems.reverse();
}
// console.log(storageItems);

function AdminDriversList() {
  const now = new Date();
  const [startDate, setStartDate] = useState(now);
  const [formatedDate, setFormatedDate] = useState(formatDate(now));
  const [driversItems, setDriversItems] = useState(storageItems);

  const handleForm = (e) => {
    e.preventDefault();
    // call for route items for this date ??
    setDriversItems([]);
    setFormatedDate(formatDate(startDate));
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
