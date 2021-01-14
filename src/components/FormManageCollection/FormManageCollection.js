import React, { useState } from 'react';
import FormCollectionDates from '../FormCollectionDates/FormCollectionDates.js';
import getDatesForPostcode from '../FormUtils/getDateForPostcode.js';

let collectionDates = [];

function FormManageCollection() {
  const [inputRef, setInputRef] = useState({ value: '' });
  const [inputActionType, setInputActionType] = useState({ value: '' });
  const [submissionOutcome, setSubmissionOutcome] = useState({ msg: [] });
  const [collectionRequest, setCollectionRequest] = useState({});

  const validateForm = () => {
    const errorMsg = [];
    // console.log(locationId);
    if (inputRef.value === '') {
      errorMsg.push('Please enter request ref no.');
      setInputRef({ value: '', css: 'textRed' });
    }
    if (inputActionType.value === '') {
      errorMsg.push('Please select Operation.');
      setInputActionType({ value: '', css: 'textRed' });
    }
    // console.log(errorMsg);
    return errorMsg;
  };

  const clearFormInputs = () => {
    // clear the form inputs
    setInputActionType({ value: '' });
    setInputRef({ value: '' });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const validation = validateForm(e);
    // there was an error
    if (validation.length > 0) {
      setSubmissionOutcome({ msg: validation, css: 'errorMsg' });
    } else {
      // get request form the db
      const colReq = { id: '1', ref: '1234', postcode: '123 ABC' };
      setCollectionRequest(colReq);
      // if request not found
      if (inputRef.value !== colReq.ref) {
        setSubmissionOutcome({ msg: ['No request with provided Ref Number was found.'], css: 'errorMsg' });

        return;
      }
      if (inputActionType.value === 'editDate') {
        // get the dates
        collectionDates = getDatesForPostcode(colReq.postcode);
        // show form if dates not empty
        if (collectionDates.length > 0) {
          setSubmissionOutcome({ msg: [], css: '', showDateForm: true });

          clearFormInputs();
          return;
        }
        setSubmissionOutcome({ msg: ['Unfortunately there is no available collections for your location. Please try again in 7 days.'], css: 'successMsg' });

        clearFormInputs();
        return;
      }
      if (inputActionType.value === 'delete') {
        // CODE FOR DELETING REQUEST

        setSubmissionOutcome({ msg: ['Your collection was deleted.'], css: 'successMsg' });
      }

      // saveInLocalStorage(collectionRequest);
      clearFormInputs();
    }
  };

  // this must be passed to FormDates component
  const confirmDate = (e, approvedDate) => {
    e.preventDefault();
    // console.log(approvedDate);
    if (approvedDate.length > 0) {
      // console.log(approvedDate);
      // console.log(collectionRequest);
      // add date to request
      const request = collectionRequest;
      request.assignedDate = approvedDate;
      console.log(request);
      // save request in the db
      // saveInLocalStorage(request);
      setSubmissionOutcome({ msg: [`Your collection date was changed to ${approvedDate}.`], css: 'successMsg' });

      // clear request after saving
      setCollectionRequest({});
    } else {
      setSubmissionOutcome({ msg: ["You didn't select any date so your collection date stays as it was before. Feel free to try some other time."], css: 'successMsg' });
    }
  };

  return (
    <div>
      <form onSubmit={submitForm} hidden={!submissionOutcome.showDateForm ? '' : 'hidden'}>
      <div className={submissionOutcome.css}>
          {submissionOutcome.msg.map((line, i) => <span key={i}>{line}</span>)}
        </div>
        <div className="form-row">
          <label htmlFor="id">Collection Ref Number</label>
          <div>
            <input
              type="text"
              id="inputRef"
              name="inputRef"
              placeholder="To test, use Ref No = 1234"
              className = {inputRef.css}
              value={inputRef.value}
              onChange={(e) => setInputRef({ value: e.target.value })}
            />
          </div>
        </div>
        <div className="form-row">
          <label>Operation</label>
          <div className={inputActionType.css}>
            <div>
              <input
                type="radio"
                name="inputActionType"
                id="inlineRadio1"
                value="delete"
                checked={inputActionType.value === 'delete'}
                onChange={(e) => setInputActionType({ value: e.target.value })}
              />
              <label htmlFor="inlineRadio1">Cancel Your Collection</label>
            </div>
            <div>
              <input
                type="radio"
                name="inputActionType"
                id="inlineRadio2"
                value="editDate"
                checked={inputActionType.value === 'editDate'}
                onChange={(e) => setInputActionType({ value: e.target.value })}
              />
              <label htmlFor="inlineRadio2">Request Another Collection Date </label>
            </div>
          </div>
        </div>
        <div className="form-row text-right">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div hidden={submissionOutcome.showDateForm ? '' : 'hidden'}>
        <FormCollectionDates dates={collectionDates} confirmDate={confirmDate} operation="update"/>
      </div>
    </div>
  );
}

export default FormManageCollection;
