import React, { useState } from 'react';
// import getDatesForPostcode from "./../FormUtils/getDateForPostcode.js"

function FormCollectionDates(props) {
  const dates1 = props.dates;
  let dates2 = props.dates;
  if (dates1.length > 0) {
    const clear = ['unselect date'];
    dates2 = dates1.concat(clear);
  }
  // console.log("dates=", dates2);
  const [approvedDate, setApprovedDate] = useState('');

  const handleRadioData = (e) => {
    // console.log("value=", e.target.value);
    if (e.target.value !== 'unselect date') {
      setApprovedDate(e.target.value);
    } else {
      setApprovedDate('');
    }
  };
  const handleForm = (e) => {
    // console.log("date=", approvedDate);
    props.confirmDate(e, approvedDate);
    setApprovedDate('');
  };
  const formMessage = (props.operation === 'create' ? 'If none of the dates is selected, this request will be cancelled. You can try some other time.' : 'If none of the dates is selected, your current collection date will not be changed.');

  return (
    <form onSubmit={handleForm}>
      <p><strong>Available collection date(s) listed below. Select one that suits you and confirm.</strong></p>
      <div className="form-row">
        <label>Available Date(s)<br />
          <small>{formMessage}</small>
        </label>
        <div className="v-align-top">
          <br />
          {dates2.map((date, n) => <div key={n}>
              <input
                type="radio"
                name="approvedDate"
                id={`dateRadio${n}`}
                onChange={handleRadioData}
                value={date}
                checked={approvedDate === date}
              />
              <label htmlFor={`dateRadio${n}`}>{date}</label>
            </div>)}
        </div>
      </div>

      <div className="form-row text-right">
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
}
export default FormCollectionDates;
