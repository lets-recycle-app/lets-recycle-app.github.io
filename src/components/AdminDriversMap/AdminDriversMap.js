/* xeslint-disable */
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import '../AdminDepotMap/AdminDepotMap.css';
import 'react-datepicker/dist/react-datepicker.css';
import Map from 'devextreme-react/map';
import { formatFullDate, formatNumberDate } from '../AdminUtils/formatDate.js';

import {
  driverSelectId, getDriver, getGeo, getMarker,
} from '../AdminUtils/makeApiCalls.js';

function AdminDriversMap() {
  const BING_KEY = `${process.env.REACT_APP_BING_API}`;
  const now = new Date();
  const [startDate, setStartDate] = useState(now);
  const [formatedDate, setFormatedDate] = useState(formatFullDate(now));
  const [dayNo, setDayNo] = useState(formatNumberDate(startDate));
  const [dbDate, setDbDate] = useState(formatFullDate(now, 'db'));
  const [geo, setGeo] = useState([]);
  const [marker, setMarker] = useState([]);
  const [driver, setDriver] = useState([]);

  useEffect(async () => {
    // This is be executed when `dbDate` state changes
    // get latitude/longitude coordinates
    const fetchGeo = await getGeo(driver.depotId, dayNo, driverSelectId);
    setGeo(fetchGeo, []);

    const fetchMarker = await getMarker(driver.depotId, dayNo, driverSelectId);
    setMarker(fetchMarker, []);

    const driverResponse = await getDriver(driverSelectId);
    setDriver(driverResponse[0], []);

    // fetchGeo();
  }, [dbDate]);

  const handleForm = (e) => {
    e.preventDefault();
    setFormatedDate(formatFullDate(startDate));
    setDbDate(formatFullDate(startDate, 'db'));
    setDayNo(formatNumberDate(startDate));
  };

  return (
    <div>
      <h2>Daily Route Map {formatFullDate(now) === formatedDate ? `${formatedDate}` : `${formatedDate}`}</h2>
      <h3>Driver: {driver.driverName}, Id: {driver.driverId}</h3>
      <form onSubmit={handleForm} className="driversMapForm">
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
      {(() => {
        if (geo.length > 0) {
          return (
            <Map
              defaultZoom={14}
              autoAdjust={true}
              defaultCenter={['Manchester']}
              apiKey={BING_KEY}
              height={600}
              width="100%"
              provider="bing"
              routes={geo}
              markers={marker}
              type="roadmap" >
            </Map>
          );
          // eslint-disable-next-line
        } else {
          return (
            <div>No route found for this date.</div>
          );
        }
      })()}
    </div>
  );
}

export default AdminDriversMap;
