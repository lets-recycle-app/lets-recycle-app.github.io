import './AdminDepotMap.css';
import 'react-datepicker/dist/react-datepicker.css';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import Map from 'devextreme-react/map';
import axios from 'axios';
import { formatNumberDate } from '../AdminUtils/formatDate.js';
import { getAllData, getDataByField } from '../AdminUtils/makeApiCalls.js';

const apiUrl = 'https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/route-map';

const AdminDepotMap = () => {
  const BING_KEY = `${process.env.REACT_APP_BING_API}`;
  const now = new Date();
  const [startDate, setStartDate] = useState(now);
  const [dayNo, setDayNo] = useState(formatNumberDate(startDate));
  const [geo, setGeo] = useState([]);
  const [depotId, setDepotId] = useState(1);
  const [depots, setDepots] = useState([]);
  const [driverId, setDriverId] = useState(0);
  const [drivers, setDrivers] = useState([]);
  const [loading, setLoading] = useState(1);

  useEffect(async () => {
    // This is be executed when page loads for the first time
    // get all depots
    const respDepots = await getAllData('depots');
    setDepots(respDepots);
  }, []);

  useEffect(async () => {
    // This is be executed when `loading` state changes
    // console.log('depotId=', depotId);
    // get drivers for selected depot
    const respDrivers = await getDataByField('drivers', 'depotId', depotId);
    setDrivers(respDrivers);

    // get coords
    const fetchGeo = async () => {
      const routeApi = `${apiUrl}?depotId = ${depotId} & dayNo = ${dayNo} & driverId = ${driverId}`;

      const apiData = await axios(routeApi);

      setGeo(apiData.data.result, []);
    };
    fetchGeo();
  }, [loading]);

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(loading + 1); // this triggers async useEffect
    setDayNo(formatNumberDate(startDate));
    setDepotId(depotId);
  };

  return (
    <div className="Container">
      <h2>Routes</h2>
      <form onSubmit={handleForm} >
        <div className="form-row">
          <label htmlFor="idDepot">Depot:</label>
          <div className="datePickerWrap">
            <select
              id="depotId"
              name="depotId"
              value={depotId}
              onChange={(e) => setDepotId(e.target.value)}
            >
              {depots.map((item, i) => <option value={item.depotId} key={i}> {item.depotName} </option>)}
            </select>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="idDriver">Driver:</label>
          <div className="datePickerWrap">
            <select
              id="driverId"
              name="driverId"
              value={driverId}
              onChange={(e) => setDriverId(e.target.value)}
            >
              <option value={0} key={0}> All Drivers </option>
              {drivers.map((item, i) => <option value={item.driverId} key={i + 1}> {item.driverName} </option>)}
            </select>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="id">Date:</label>
          <div className="datePickerWrap">
            <DatePicker
              id="id"
              name="dateSelected"
              selected={startDate}
              onChange={date => setStartDate(date)} // eslint-disable-line
              dateFormat="dd-MM-yyyy"
            />
          </div>
        </div>
        <div className="form-row">
          <button type="submit">Confirm</button>
        </div>
      </form>
      <Map
        defaultZoom={14}
        autoAdjust={true}
        defaultCenter={['Manchester']}
        apiKey={BING_KEY}
        height={600}
        width="100%"
        provider="bing"
        routes={geo}
        // markers={markersData}
        type="roadmap" >
      </Map>
    </div>
  );
};

export default AdminDepotMap;
