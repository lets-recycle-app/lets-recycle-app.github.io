import './DriversListItem.css';
function DriversListItem(props) {  
    return (
        <div className="drivers-list-item">
          <div className= {props.type === "collection" ? "box-head green" : "box-head blue"} >
            <span className="tick-box-icon">{props.completed ? '\u2611' : '\u2610'}</span>
            {props.houseNo} {props.street}, {props.town}, {props.postcode} 
            <span className="triangle">&#9660;</span>
          </div>
          <div className="box-body">
            Item: {props.item}
            <br/>Location Type: {props.locationType}
            <br/>Notes: {props.notes}
            <br/>Status: {props.completed ? 'completed' : 'not completed'}
          </div>
        </div>
    );
}

export default DriversListItem;