import './AdminDepotMap.css';
import React, { useEffect, useState } from 'react';
import Map from 'devextreme-react/map';
import Select from 'react-select';
import axios from 'axios';

const options = [
  { value: 1, label: 'Horwich' },
  { value: 2, label: 'Manchester' },
  { value: 3, label: 'Leeds' },
];

const apiUrl = 'https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/route-map';

const depotId = 1;
const driverId = 0;
const dayNo = 1;

const AdminDepotMap = () => {
  const BING_KEY = `${process.env.REACT_APP_BING_API}`;
  const [geo, setGeo] = useState([]);

  useEffect(() => {
    const fetchGeo = async () => {
      const routeApi = `${apiUrl}?depotId = ${depotId} & dayNo = ${dayNo} & driverId = ${driverId}`;

      const apiData = await axios(
        routeApi,
      );

      setGeo(apiData.data.result, []);
    };
    fetchGeo();
  }, []);

  return (
      <div className="Container">
        <Select options={options} />
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
