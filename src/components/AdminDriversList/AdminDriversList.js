import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import DriversListItem from '../DriversListItem/DriversListItem.js';
import 'react-datepicker/dist/react-datepicker.css';
import {
  getDriversItems, getAddressById, getDepotById, getDriver, driverSelectId,
} from '../AdminUtils/makeApiCalls.js';
import { formatFullDate } from '../AdminUtils/formatDate.js';

function AdminDriversList() {
  const now = new Date();
  const [startDate, setStartDate] = useState(now);
  const [formatedDate, setFormatedDate] = useState(formatFullDate(now));
  const [dbDate, setDbDate] = useState(formatFullDate(now, 'db'));
  const [driversItems, setDriversItems] = useState([]);
  const [driver, setDriver] = useState([]);

  useEffect(async () => {
    const driverResponse = await getDriver(driverSelectId);
    setDriver(driverResponse[0], []);
    setDriversItems([]);

    // This is be executed when `loading` state changes
    const drItems = await getDriversItems(driverSelectId, dbDate);
    // console.log('drItems= ', drItems, 'dbDate=', dbDate);
    const arrItemsAddress = [];
    // eslint-disable-next-line
    for (const item of drItems) {
      // eslint-disable-next-line
      const address = await getAddressById(item.addressId);
      const objItem = {
        refNo: item.refNo,
        distance: item.distance,
        name: address.customerName,
        email: address.customerEmail,
        houseNo: address.houseNo,
        street: address.street,
        town: address.townAddress,
        addressPostcode: item.addressPostcode,
        status: item.status,
        routeAction: item.routeAction,
        appliance: item.itemType,
        locationType: address.locationType,
        notes: address.notes,
      };
      if (item.itemType === 'depot') {
        // eslint-disable-next-line
        const depot = await getDepotById(item.depotId);
        // console.log(depot);
        objItem.houseNo = 'AO';
        objItem.street = 'Depot';
        objItem.town = depot.depotName;
      }
      arrItemsAddress.push(objItem);
    }
    setDriversItems(arrItemsAddress);
  }, [dbDate]);

  const handleForm = (e) => {
    e.preventDefault();
    // call for route items for this date ??
    setDriversItems([]);
    setFormatedDate(formatFullDate(startDate));
    setDbDate(formatFullDate(startDate, 'db'));
  };

  return (
    <div>
      <h2> Daily Route Schedule {formatFullDate(now) === formatedDate ? `${formatedDate}` : `${formatedDate}`}</h2>
      <h3>Driver: {driver.driverName}, Id: {driver.driverId}</h3>

      <form onSubmit={handleForm} >
        <div className="form-row">
          <div className="datePickerWrap">
            <DatePicker
              id="dateSelected"
              name="dateSelected"
              selected={startDate}
              onChange={date => setStartDate(date)} // eslint-disable-line
              dateFormat="dd-MM-yyyy"
            />
            <button type="submit">Confirm</button>
          </div>
        </div>
      </form>
      {driversItems.length === 0 ? 'No items found for this date.' : ''}
      { driversItems.map((item, n) => <DriversListItem
        key={n}
        refNo={item.refNo}
        distance={item.distance}
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
