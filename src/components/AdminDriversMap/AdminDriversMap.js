/* xeslint-disable */
import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import '../AdminDepotMap/AdminDepotMap.css';
import 'react-datepicker/dist/react-datepicker.css';
import Map from 'devextreme-react/map';
import { formatFullDate, formatNumberDate } from '../AdminUtils/formatDate.js';
import { getGeo } from '../AdminUtils/makeApiCalls.js';

function AdminDriversMap() {
  const BING_KEY = `${process.env.REACT_APP_BING_API}`;
  const now = new Date();
  const [startDate, setStartDate] = useState(now);
  const [formatedDate, setFormatedDate] = useState(formatFullDate(now));
  const [dayNo, setDayNo] = useState(formatNumberDate(startDate));
  const [dbDate, setDbDate] = useState(formatFullDate(now, 'db'));
  const [geo, setGeo] = useState([]);

  useEffect(async () => {
    // This is be executed when `dbDate` state changes
    // get coords
    const fetchGeo = await getGeo(1, dayNo, 1);
    setGeo(fetchGeo, []);
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
      {(() => {
        if (geo.length > 0) {
          return (
            <Map
              defaultCenter={['Prenton', 'Prenton', 'CH43 8TJ']}
              defaultZoom={14}
              apiKey={BING_KEY}
              height={500}
              width="100%"
              provider="bing"
              routes={geo}
              // type = "roadmap" || "satellite" || "hybrid"
              type="roadmap" >
            </Map>
          );
          // eslint-disable-next-line
        } else {
          return (
            <div>No route foud for this date.</div>
          );
        }
      })()}

    </div>
  );
}

export default AdminDriversMap;
