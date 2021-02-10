/* ?eslint-disable */
import React, { useState } from 'react';
import './FormCollectionDates.css';

function FormCollectionDates(props) {
  const dates1 = props.dates;
  let dates2 = props.dates;
  if (dates1.length > 0) {
    const clear = ['non suitable'];
    dates2 = dates1.concat(clear);
  }
  const [approvedDate, setApprovedDate] = useState('');
  const [approvedKey, setApprovedKey] = useState('');

  const handleRadioData = (e) => {
    if (e.target.value !== 'unselect date') {
      setApprovedDate(e.target.value);
      setApprovedKey(e.target.dataset.key);
    } else {
      setApprovedDate('');
      setApprovedKey('');
    }
  };
  const handleForm = (e) => {
    props.confirmDate(e, approvedDate, approvedKey);
    setApprovedDate('');
    setApprovedKey('');
  };

  return (
    <form onSubmit={handleForm}>
      <h2>Please select one from the available collection date(s) listed below:</h2>
      <div className="form-row">
        <div className="v-align-top, collection-radio">
          {dates2.map((date, n) => <div key={n}>
            <input
              type="radio"
              name="approvedDate"
              id={`dateRadio${n}`}
              onChange={handleRadioData}
              value={date}
              checked={approvedDate === date}
              data-key={n}
            />
            <label htmlFor={`dateRadio${n}`}>{date}</label>
          </div>)}
          <div className="form-row">
            <button type="submit">Confirm</button>
          </div>
        </div>
      </div>

    </form>
  );
}
export default FormCollectionDates;
