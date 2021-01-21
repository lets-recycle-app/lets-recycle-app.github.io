/* eslint-disable */
import React, { useState } from 'react';
import './FormReport.css';
import { v4 as uuidv4 } from 'uuid';
import validator from 'email-validator';
import FormCollectionDates from '../FormCollectionDates/FormCollectionDates.js';
import getDatesForPostcode from '../FormUtils/getDateForPostcode.js';
import { isPostCodeValid } from '../AdminUtils/routeUtils.js';

const appliances = [
  { id: 'Big Fridge', weighting: '1.0' },
  { id: 'Freezer', weighting: '1.0' },
  { id: 'Washer', weighting: '1.0' },
  { id: 'Small Fridge', weighting: '0.5' },
  { id: 'Dryer', weighting: '0.5' },
  { id: 'Oven', weighting: '0.5' },
];
let collectionDates = [];
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

  /* do this on submission */
  const handleRadioPublic = (e) => {
    setLocationType({ value: e.target.value });
    setInputName({ value: '' });
    setInputEmail({ value: '' });
  };

  const validateForm = async () => {
    const errorMsg = [];
    // console.log(locationType, inputName, inputEmail, inputAppliance, inputHouseNo,inputStreet, inputTown, inputPostcode, inputNotes);
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
      //console.log(validPostcode);
      if (!validPostcode) {
        errorMsg.push('Please enter a valid Postcode.');
        setInputPostcode({ value: inputPostcode.value, css: 'borderRed' });
        return errorMsg;
      }
      //console.log('Lorem Ipsum!!!'); 
    }
    // console.log(errorMsg);
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

  const saveInLocalStorage = (request) => {
    let colReq = [];
    // get storage and turn into array
    if (localStorage.getItem('colRequest')) {
      colReq = JSON.parse(localStorage.getItem('colRequest'));
    }
    // add new object in the array
    colReq.push(request);

    // save new to storage
    localStorage.setItem('colRequest', JSON.stringify(colReq));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const validation = await (validateForm(e));

    // there was an error
    if (validation.length > 0) {
      setSubmissionOutcome({ msg: validation, css: 'errorMsg' });
    } else {
      // save request in a state
      const collectionId = uuidv4();
      // const now = new Date().toISOString().substring(0, 19).replace('T', ' ');
      setCollectionRequest({
        refNo: collectionId,
        locationType: locationType.value,
        name: inputName.value,
        email: inputEmail.value,
        appliance: inputAppliance.value,
        houseNo: inputHouseNo.value,
        street: inputStreet.value,
        town: inputTown.value,
        postcode: inputPostcode.value,
        notes: inputNotes.value,
      });
      // console.log(collectionRequest);

      if (locationType.value === 'private property') {
        // get the dates
        collectionDates = getDatesForPostcode(inputPostcode.value);
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
      setSubmissionOutcome({ msg: ['Your request was sent.'], css: 'successMsg' });

      saveInLocalStorage(collectionRequest);
      clearFormInputs();
    }
  };
  // this must be passed to FormDates component!!!
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
      saveInLocalStorage(request);
      setSubmissionOutcome({ msg: [`Your collection is going to be on ${approvedDate}`], css: 'successMsg' });

      // clear request after saving
      setCollectionRequest({});
    } else {
      setSubmissionOutcome({ msg: ["You didn't select any date, and your request was aborted. Feel free to try some other time. "], css: 'successMsg' });
    }
  };

  // console.log('lorem', submissionOutcome);
  return (
    <div>
      <form onSubmit={submitForm} hidden={!submissionOutcome.showDateForm ? '' : 'hidden'} >
        <p><strong>Fill in the form to request collection of a scrap appliance.</strong></p>
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
          <label htmlFor="inputNotes">Notes
          <br /><small>Please describe location in detail. What is parking situation and access to the appliance?</small>
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
        <FormCollectionDates dates={collectionDates} confirmDate={confirmDate} operation="create" />
      </div>
    </div>
  );
}

export default FormReport;
