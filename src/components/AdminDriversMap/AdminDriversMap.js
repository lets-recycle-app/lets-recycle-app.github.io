/* eslint-disable */
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import '../AdminDepotMap/AdminDepotMap.css';
import 'react-datepicker/dist/react-datepicker.css';
import Map from 'devextreme-react/map';
import { formatFullDate } from '../AdminUtils/formatDate.js';
import { getDriversItems, getAddressById, getDepotById } from '../AdminUtils/makeApiCalls.js';

function AdminDriversMap() {
  const now = new Date();
  const [startDate, setStartDate] = useState(now);
  const [formatedDate, setFormatedDate] = useState(formatFullDate(now));
  const [dbDate, setDbDate] = useState(formatFullDate(now, 'db'));
  const [driversItems, setDriversItems] = useState([]);
  useEffect(async () => {
    // This is be executed when `loading` state changes
    const drItems = await getDriversItems(1, dbDate);
    // console.log('drItems= ', drItems, 'dbDate=', dbDate);
    const arrItemsAddress = [];
    // eslint-disable-next-line
    for (const item of drItems) {
      // eslint-disable-next-line
      const address = await getAddressById(item.addressId);
      const objItem = {
        refNo: item.refNo,
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


  const BING_KEY = `${process.env.REACT_APP_BING_API}`;

  const routesData = [{
    weight: 0.5,
    color: 'blue',
    opacity: 1,
    mode: 'driving',
    locations: [
      [53.391139000000000, -3.067504000000000],
      [53.391535103505300, -3.066025692571600],
      [53.390091033141000, -3.084635511553780],
      [53.390450000000000, -3.061096000000000],
      [53.388854000000000, -3.059628000000000],
      [53.390031000000000, -3.058588000000000],
      [53.392692000000000, -3.084654000000000],
      [53.396637000000000, -3.083837000000000],
      [53.392981000000000, -3.084496000000000],
      [53.397496000000000, -3.079317000000000],
      [53.367750000000000, -3.046028000000000],
      'Oxton',
    ],
  },
  {
    weight: 6,
    color: 'red',
    opacity: 0.5,
    mode: 'walking',
    locations: [
      [53.391139000000000, -3.067504000000000],
      [53.391535103505300, -3.066025692571600],
      [53.390091033141000, -3.084635511553780],
      [53.390450000000000, -3.061096000000000],
      [53.388854000000000, -3.059628000000000],
      [53.390031000000000, -3.058588000000000],
      [53.392692000000000, -3.084654000000000],
      [53.396637000000000, -3.083837000000000],
      [53.392981000000000, -3.084496000000000],
      [53.397496000000000, -3.079317000000000],
      [53.367750000000000, -3.046028000000000],
      'Oxton',
    ],
  },
  ];

  return (
    <div>
      <h2>Your {formatFullDate(now) === formatedDate ? `todays (${formatedDate})` : `${formatedDate}`} route is shown below.</h2>
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
      <Map
        defaultCenter={['Prenton', 'Prenton', 'CH43 8TJ']}
        defaultZoom={14}
        apiKey={BING_KEY}
        height={500}
        width="100%"
        provider="bing"
        routes={routesData}
        // type = "roadmap" || "satellite" || "hybrid"
        type="roadmap" >

      </Map>
    </div>
  );
}

export default AdminDriversMap;
