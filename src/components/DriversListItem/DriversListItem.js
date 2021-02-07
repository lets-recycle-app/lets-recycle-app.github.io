import React from 'react';
import './DriversListItem.css';

function DriversListItem(props) {
  return (
        <div className="drivers-list-item">
          <div className= {props.routeAction === 'collection' ? 'box-head green' : 'box-head dark'} >
{/*             <span className="tick-box-icon">{props.completed ? '\u2611' : '\u2610'}</span> */}
            {props.distance} {props.houseNo} {props.street}, {props.town}, {props.postcode}
          </div>
          <div className="box-body">
            Reference no: {props.refNo}
            <br/>Distance : {props.distance} km
            { props.name !== '' ? <br/> : '' }
            { props.name !== '' ? `Name: ${props.name}` : '' }
            { props.email !== '' ? <br/> : ''}
            { props.email !== '' ? `Email: ${props.email}` : ''}
            <br/>Item: {props.appliance}
            <br/>Location Type: {props.locationType}
            <br/>Notes: {props.notes}
            <br/>Status: {props.status}
          </div>
        </div>
  );
}

export default DriversListItem;
