/* xeslint-disable */
import React, { useState } from 'react';
import './FormReport.css';
import validator from 'email-validator';
import FormCollectionDates from '../FormCollectionDates/FormCollectionDates.js';
import getDatesForPostcode from '../FormUtils/getDateForPostcode.js';
import { isPostCodeValid } from '../AdminUtils/routeUtils.js';
import { makePostCall } from '../AdminUtils/makeAxiosCalls.js';

const appliances = [
  { id: 'Fridge', weighting: '1.0' },
  { id: 'Freezer', weighting: '1.0' },
  { id: 'Washer', weighting: '1.0' },
  { id: 'Dryer', weighting: '0.5' },
  { id: 'Oven', weighting: '0.5' },
  { id: 'Cooker', weighting: '0.5' },
  { id: 'Dishwasher', weighting: '1.0' },
];
let collectionDatesAndRefs = { arrDates: [], arrRefNos: [] };
function FormReport() {
  const [locationType, setLocationType] = useState({ value: '' });
  const [inputName, setInputName] = useState({ value: '' });
  const [inputEmail, setInputEmail] = useState({ value: '' });
  const [inputAppliance, setInputAppliance] = useState({ value: '' });
  const [inputHouseNo, setInputHouseNo] = useState({ value: '' });
  const [inputStreet, setInputStreet] = useState({ value: '' });
  const [inputTown, setInputTown] = useState({ value: '' });
  const [inputPostcode, setInputPostcode] = useState({ value: '' });
  const [inputNotes, setInputNotes] = useState({ value: '' });
  const [submissionOutcome, setSubmissionOutcome] = useState({ msg: [] });
  const [collectionRequest, setCollectionRequest] = useState({});

  /* this clears name and email when user switches to public */
  const handleRadioPublic = (e) => {
    setLocationType({ value: e.target.value });
    setInputName({ value: '' });
    setInputEmail({ value: '' });
  };

  const validateForm = async () => {
    const errorMsg = [];
    // console.log(locationType.value, inputName.value, inputEmail.value, inputAppliance.value, inputHouseNo.value, inputStreet.value, inputTown.value, inputPostcode.value, inputNotes.value);
    if (locationType.value === '') {
      errorMsg.push('Please select Location Type');
      setLocationType({ value: '', css: 'textRed' });
    }
    if (locationType.value === 'private property') {
      if (inputName.value === '') {
        errorMsg.push('Please enter your Forename and Surname.');
        setInputName({ value: '', css: 'borderRed' });
      }
      if (inputEmail.value === '' || validator.validate(inputEmail.value) !== true) {
        errorMsg.push('Please enter a valid Email.');
        setInputEmail({ value: inputEmail.value, css: 'borderRed' });
      }
    }
    if (inputAppliance.value === '') {
      errorMsg.push('Please select Appliance Type.');
      setInputAppliance({ value: '', css: 'borderRed' });
    }
    if (inputHouseNo.value === '') {
      errorMsg.push('Please enter House/Building number.');
      setInputHouseNo({ value: '', css: 'borderRed' });
    }
    if (inputStreet.value === '') {
      errorMsg.push('Please enter Street.');
      setInputStreet({ value: '', css: 'borderRed' });
    }
    if (inputTown.value === '') {
      errorMsg.push('Please enter Town or City.');
      setInputTown({ value: '', css: 'borderRed' });
    }
    if (inputPostcode.value === '') {
      errorMsg.push('Please enter Postcode.');
      setInputPostcode({ value: '', css: 'borderRed' });
    } else {
      const validPostcode = await (isPostCodeValid(inputPostcode.value));
      if (!validPostcode) {
        errorMsg.push('Please enter a valid Postcode.');
        setInputPostcode({ value: inputPostcode.value, css: 'borderRed' });
        return errorMsg;
      }
    }
    return errorMsg;
  };

  const clearFormInputs = () => {
    // clear the form inputs
    setLocationType({ value: '' });
    setInputName({ value: '' });
    setInputEmail({ value: '' });
    setInputAppliance({ value: '' });
    setInputHouseNo({ value: '' });
    setInputStreet({ value: '' });
    setInputTown({ value: '' });
    setInputPostcode({ value: '' });
    setInputNotes({ value: '' });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const validation = await (validateForm(e));
    // there was an error
    if (validation.length > 0) {
      setSubmissionOutcome({ msg: validation, css: 'errorMsg' });
    } else {
      // prepare collection request object
      const objColReq = {
        locationType: locationType.value,
        customerName: inputName.value,
        customerEmail: inputEmail.value,
        itemType: inputAppliance.value,
        houseNo: inputHouseNo.value,
        street: inputStreet.value,
        townAddress: inputTown.value,
        postcode: inputPostcode.value,
        notes: inputNotes.value,
      };
      setCollectionRequest(objColReq);
      // console.log('objColReq!! = ', objColReq);

      // get the dates
      collectionDatesAndRefs = await getDatesForPostcode(inputPostcode.value);
      // console.log('dates and refs = ', collectionDatesAndRefs);

      if (collectionDatesAndRefs.arrDates !== undefined && collectionDatesAndRefs.arrDates.length > 0) {
        if (locationType.value === 'private property') {
          // show form if dates not empty
          setSubmissionOutcome({ msg: [], css: '', showDateForm: true });
          clearFormInputs();
        } else {
          // public area request
          // get params for api call
          const refNo = collectionDatesAndRefs.arrRefNos[0];
          const url = `https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/collect-confirm?refNo=${refNo}`;
          const objBody = objColReq;
          // console.log(objBody);

          // save request in the db
          const saveReq = await makePostCall(url, objBody);
          // console.log(saveReq);
          if (saveReq.status !== undefined && saveReq.status === 200) {
            // console.log('success');
            setSubmissionOutcome({ msg: ['Your request was sent.'], css: 'successMsg' });
          } else {
            setSubmissionOutcome({ msg: ['An error occured and your request was not saved. Try again some other time.'], css: 'errorMsg' });
          }
          clearFormInputs();
        }
      } else {
        setSubmissionOutcome({ msg: ['Unfortunately there is no available collections for your location. Please try again in 7 days.'], css: 'successMsg' });

        clearFormInputs();
      }
    } // if no validaton errors END
  };
  // this must be passed to FormDates component!!!
  const confirmDate = async (e, approvedDate, approvedKey) => {
    e.preventDefault();
    if (approvedDate.length > 0) {
      // get params for api call
      const refNo = collectionDatesAndRefs.arrRefNos[approvedKey];
      const saveUrl = `https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/collect-confirm?refNo=${refNo}`;
      const objBody = collectionRequest;
      // console.log(objBody);

      // save request in the db
      const saveReq = await makePostCall(saveUrl, objBody);
      // console.log(saveReq);
      if (saveReq.status !== undefined && saveReq.status === 200) {
        // console.log('success');
        setSubmissionOutcome({ msg: [`Your collection is going to be on ${approvedDate}`], css: 'successMsg' });
      } else {
        setSubmissionOutcome({ msg: ['An error occured and your request was not saved. Try again some other time.'], css: 'errorMsg' });
      }
      // clear request after saving
      setCollectionRequest({});
    } else {
      setSubmissionOutcome({ msg: ["You didn't select any date, and your request was aborted. Feel free to try some other time. "], css: 'successMsg' });
    }
  };

  return (
    <div>
      <form onSubmit={submitForm} hidden={!submissionOutcome.showDateForm ? '' : 'hidden'} >
        <div className={submissionOutcome.css}>
          {submissionOutcome.msg.map((line, i) => <span key={i}>{line}</span>)}
        </div>
        <div className="form-row">
          <label>Type of location</label>
          <div className={locationType.css} >
            <div className="form-check-inline">
              <input
                type="radio"
                name="locationType"
                id="inlineRadio1"
                onChange={handleRadioPublic}
                value="public area"
                checked={locationType.value === 'public area'}
              />
              <label htmlFor="inlineRadio1">Public Area</label>
            </div>
            <div className="form-check-inline">
              <input
                type="radio"
                name="locationType"
                id="inlineRadio2"
                value="private property"
                onChange={(e) => setLocationType({ value: e.target.value })}
                checked={locationType.value === 'private property'}
              />
              <label htmlFor="inlineRadio2">Private Property </label>
            </div>
          </div>
        </div>
        <div hidden={locationType.value === 'private property' ? '' : 'hidden'} >
          <div className="form-row">
            <label htmlFor="inputName">Full Name</label>
            <div>
              <input
                type="text"
                id="inputName"
                name="inputName"
                onChange={(e) => setInputName({ value: e.target.value })}
                value={inputName.value}
                className={inputName.css}
              />
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <div>
              <input
                type="text"
                id="inputEmail"
                name="inputEmail"
                onChange={(e) => setInputEmail({ value: e.target.value })}
                value={inputEmail.value}
                className={inputEmail.css}
              />
            </div>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputAppliance">Appliance Type</label>
          <div>
            <select
              id="inputAppliance"
              name="appliance"
              value={inputAppliance.value}
              className={inputAppliance.css}
              onChange={(e) => setInputAppliance({ value: e.target.value })}
            >
              <option value="" key={0}>Select...</option>
              {appliances.map((item, i) => <option value={item.id} key={i + 1}> {item.id} </option>)}
            </select>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputHouseNo">House/Building No</label>
          <div>
            <input
              type="text"
              id="inputHouseNo"
              value={inputHouseNo.value}
              className={inputHouseNo.css}
              onChange={(e) => setInputHouseNo({ value: e.target.value })}
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputStreet">Street</label>
          <div>
            <input
              type="text"
              id="inputStreet"
              value={inputStreet.value}
              className={inputStreet.css}
              onChange={(e) => setInputStreet({ value: e.target.value })}
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputTown">Town/City</label>
          <div>
            <input
              type="text"
              id="inputTown"
              value={inputTown.value}
              className={inputTown.css}
              onChange={(e) => setInputTown({ value: e.target.value })}
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputPostcode" >Postcode</label>
          <div>
            <input
              type="text"
              id="inputPostcode"
              value={inputPostcode.value}
              className={inputPostcode.css}
              onChange={(e) => setInputPostcode({ value: e.target.value })}
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputNotes">Please describe the exact appliance pickup location and any parking issues.
          </label>
          <div className="textarea-wrapper">
            <textarea
              id="inputNotes"
              name="inputNotes"
              value={inputNotes.value}
              className={inputNotes.css}
              onChange={(e) => setInputNotes({ value: e.target.value })}
            ></textarea>
          </div>
        </div>
        <div className="form-row text-right">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div hidden={submissionOutcome.showDateForm ? '' : 'hidden'}>
        <FormCollectionDates dates={collectionDatesAndRefs.arrDates} confirmDate={confirmDate} operation="create" />
      </div>
    </div>
  );
}

export default FormReport;
