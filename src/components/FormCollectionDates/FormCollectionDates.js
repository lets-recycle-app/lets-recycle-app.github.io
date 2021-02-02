/* ?eslint-disable */
import React, { useState } from 'react';

function FormCollectionDates(props) {
  const dates1 = props.dates;
  let dates2 = props.dates;
  if (dates1.length > 0) {
    const clear = ['unselect date'];
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
              data-key={n}
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
