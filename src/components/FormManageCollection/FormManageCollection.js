/* xeslint-disable */
import React, { useState } from 'react';
import FormCollectionDates from '../FormCollectionDates/FormCollectionDates.js';
import getDatesForPostcode from '../FormUtils/getDateForPostcode.js';
import { makePostCall, makeGetCall } from '../AdminUtils/makeAxiosCalls.js';

let collectionDatesAndRefs = { arrDates: [], arrRefNos: [] };

function FormManageCollection() {
  const [inputRef, setInputRef] = useState({ value: '' });
  const [inputActionType, setInputActionType] = useState({ value: '' });
  const [submissionOutcome, setSubmissionOutcome] = useState({ msg: [] });
  const [collectionRequest, setCollectionRequest] = useState({});

  const validateForm = () => {
    const errorMsg = [];
    if (inputRef.value === '') {
      errorMsg.push('Please enter request ref no.');
      setInputRef({ value: '', css: 'textRed' });
    }
    if (inputActionType.value === '') {
      errorMsg.push('Please select Operation.');
      setInputActionType({ value: '', css: 'textRed' });
    }
    return errorMsg;
  };

  const clearFormInputs = () => {
    // clear the form inputs
    setInputActionType({ value: '' });
    setInputRef({ value: '' });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const validation = validateForm(e);
    // there was an error
    if (validation.length > 0) {
      setSubmissionOutcome({ msg: validation, css: 'errorMsg' });
    } else {
      // get request form the db
      // D01R04S13T31
      // D01R07S04T06
      const getUrl = `https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/routes?refNo=${inputRef.value}`;
      const request = await makeGetCall(getUrl);
      // console.log('GET request =', request);
      if (request.result !== undefined && request.result.length > 0) {
        const colReq = request.result[0];
        setCollectionRequest(colReq);
        // console.log('req = ', colReq);

        if (inputActionType.value === 'editDate') {
          // get the dates
          collectionDatesAndRefs = await getDatesForPostcode(colReq.addressPostcode);
          // console.log('colDates in form file = ', collectionDatesAndRefs.arrDates);
          // show form if dates not empty
          if (collectionDatesAndRefs.arrDates !== undefined && collectionDatesAndRefs.arrDates.length > 0) {
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
          const delUrl = `https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/collect-cancel?refNo=${collectionRequest.refNo}`;

          const delRequest = await makePostCall(delUrl);
          console.log('del response= ', delRequest);
          // check if there response wasn't an error
          if (delRequest.message !== undefined && delRequest.message === 'collection cancelled') {
            setSubmissionOutcome({ msg: ['Your collection was deleted.'], css: 'successMsg' });
            setCollectionRequest({});
          } else {
            setSubmissionOutcome({ msg: ['An error occured. Collection was not deleted.'], css: 'errorMsg' });
          }
        }
      } else { //  request not found
        setSubmissionOutcome({ msg: ['No request with provided Ref Number was found.'], css: 'errorMsg' });
        return;
      }
      clearFormInputs();
    }
  };

  // this must be passed to FormDates component
  // eslint-disable-next-line
  const confirmDate = async (e, approvedDate, approvedKey) => {
    e.preventDefault();
    if (approvedDate.length > 0) {
      /*       // add date to request
            const request = {
              locationType: 'private property',
              customerName: 'Jane Newman',
              customerEmail: 'aaa@aa.aa',
              itemType: 'washer',
              houseNo: '12',
              street: 'Some St',
              townAddress: 'Sometown',
              postcode: 'sk1 2lg',
              notes: 'lorem ipsum dolor sit amet',
            };
            // request.assignedDate = approvedDate;
            // console.log(request);

            // save request in the db
            const refNo = 'D01R07S04T06';
            const url = `https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/collect-confirm?refNo=${refNo}`;
            const data = await makePostCall(url, request);

            console.log(data); */

      // some code to save...
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
          <style>fontsize =20</style>
          {submissionOutcome.msg.map((line, i) => <span key={i}>{line}</span>)}
        </div>
        <div className="form-row">
          <label htmlFor="id">Collection Ref Number</label>
          <div>
            <input
              type="text"
              id="inputRef"
              name="inputRef"
              placeholder=""
              className={inputRef.css}
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
        <FormCollectionDates dates={collectionDatesAndRefs.arrDates} confirmDate={confirmDate} operation="update" />
      </div>
    </div>
  );
}

export default FormManageCollection;
