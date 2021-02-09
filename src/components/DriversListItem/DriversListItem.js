import React from 'react';
import './DriversListItem.css';

function DriversListItem(props) {
  return (
        <div className="drivers-list-item">
          <div className= {props.routeAction === 'recycle' ? 'box-head green' : 'box-head dark'} >
            {props.routeAction !== 'depot' ? `${props.routeAction}:  ${props.appliance},  ${props.postcode}, ${props.distance} km` : `${props.routeAction}, ${props.postcode}` }
          </div>
          <div className="box-body">

            Reference no: {props.refNo}
            <br/>Address : {props.houseNo} {props.street}, {props.town}, {props.postcode}
            <br/>Distance : {props.distance} km
            { props.name !== '' && props.name !== undefined ? <br/> : '' }
            { props.name !== '' && props.name !== undefined ? `Name: ${props.name}` : '' }
            { props.email !== '' && props.email !== undefined ? <br/> : ''}
            { props.email !== '' && props.email !== undefined ? `Email: ${props.email}` : ''}
            <br/>Item: {props.appliance}
            <br/>Location Type: {props.locationType}
            <br/>Notes: {props.notes}
            <br/>Status: {props.status}
          </div>
        </div>
  );
}

export default DriversListItem;
