import React, { useState } from 'react';
// import getDatesForPostcode from "./../FormUtils/getDateForPostcode.js"

function FormCollectionDates(props) {
  const dates1 = props.dates;
  let { dates } = props;
  if (dates1.length > 0) {
    const clear = ['unselect all'];
    // eslint-disable-next-line no-unused-vars
    dates = dates1.concat(clear);
  }
  // console.log("dates=", dates);
  const [approvedDate, setApprovedDate] = useState('');

  // eslint-disable-next-line no-unused-vars
  const handleRadioData = (e) => {
    // console.log("value=", e.target.value);
    if (e.target.value !== 'unselect all') {
      setApprovedDate(e.target.value);
    } else {
      setApprovedDate('');
    }
  };
  const handleForm = (e) => {
    // console.log("date=", approvedDate);
    props.confirmDate(e, approvedDate);
  };

  return (
    <form onSubmit={handleForm}>
      <p><strong>Available collection date(s) are listed below. Select one that suits you and confirm.</strong></p>
      <div className="form-row">
        <label>Available Date(s)<br />
          <small>If none of the dates is selected, this request will be cancelled. You can try some other time.</small>
        </label>
        {/* commented out as compile fails with dates is not a map function
        <div>
          {dates.map((date, n) => <div key={n}>
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
        */}
      </div>

      <div className="form-row text-right">
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
}
export default FormCollectionDates;
