import React from 'react';
import FormCollectionDates from '../FormCollectionDates/FormCollectionDates.js';

function PageManageCollection() {
  const collectionDates = ['2021-03-15', '2021-04-18', '2021-05-20'];

  const handleClick = (e) => {
    console.log('value=', e.target.value);
  };
  const confirmDate = (e) => {
    e.preventDefault();
  };
  return (
    <div className="main-column">
      <h1>Manage your collection</h1>
      <p>You are going to need the reference number to access your collection.</p>
      <form>
        <div className="form-row">
          <label htmlFor="id">Collection Ref Number</label>
          <div>
            <input
              type="text"
              id="inputID"
              name="inputID"
              value=""
              onChange={handleClick}
            />
          </div>
        </div>
        <div className="form-row">
          <label>Operation</label>
          <div className="" >
            <div className="">
              <input
                type="radio"
                name="actionType"
                id="inlineRadio1"
                onChange={handleClick}
                value="delete"
                checked=""
              />
              <label htmlFor="inlineRadio1">Cancel Your Collection</label>
            </div>
            <div className="">
              <input
                type="radio"
                name="actionType"
                id="inlineRadio2"
                value="editDate"
                onChange={handleClick}
                checked=""
              />
              <label htmlFor="inlineRadio2">Request Another Collection Date </label>
            </div>
          </div>
        </div>

        <div className="form-row text-right">
          <button type="submit">Submit</button>
        </div>
      </form>
      <FormCollectionDates dates={collectionDates} confirmDate={confirmDate} />
    </div>
  );
}

export default PageManageCollection;
