import "./FormReport.css";
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

//console.log(uuidv4());

function FormReport() {
  const [locationType, setLocationType] = useState({value:""});
  const [inputName, setInputName] = useState({value:""});
  const [inputEmail, setInputEmail] = useState({value:""});
  const [inputAppliance, setInputAppliance] = useState({value:""});
  const [inputHouseNo, setInputHouseNo] = useState({value:""});
  const [inputStreet, setInputStreet] = useState({value:""});
  const [inputTown, setInputTown] = useState({value:""});
  const [inputPostcode, setInputPostcode] = useState({value:""});
  const [inputNotes, setInputNotes] = useState({value:""});
  const [messageOnSubmit, setMessageOnSubmit] = useState([]);

  /* do this on submission??? */
  const handleRadioPublic = e => {
    setLocationType(e.target.value);
    setInputName({value:""});
    setInputEmail({value:""});
  }

  const validateForm = e => {
    let errorMsg = [];
    //console.log(locationType, inputName, inputEmail, inputAppliance, inputHouseNo,inputStreet, inputTown, inputPostcode, inputNotes);
    if(locationType.value === ""){
      errorMsg.push("Please select Location Type");
      setLocationType({value: "", css: "textRed"});
    }
    if(inputName.value === ""){
      errorMsg.push("Please enter your forename and surname.");
      setInputName({value: "", css: "borderRed"});
      //console.log('lorem', inputName);
    }

    var validator = require("email-validator");
    if(inputEmail.value === "" || validator.validate(inputEmail.value) !== true){
      errorMsg.push("Please enter a valid email.");
      setInputEmail({value: inputEmail.value, css: "borderRed"});
    }
    if(inputAppliance.value === ""){
      errorMsg.push("Please select appliance type.");
      setInputAppliance({value: "", css: "borderRed"});
    } 
    if(inputHouseNo.value === ""){
      errorMsg.push("Please enter house/building number.");
      setInputHouseNo({value: "", css: "borderRed"});
    }
    if(inputStreet.value === ""){
      errorMsg.push("Please enter street.");
      setInputStreet({value: "", css: "borderRed"});
    }
    if(inputTown.value === ""){
      errorMsg.push("Please enter town or city.");
      setInputTown({value: "", css: "borderRed"});
    } 
    if(inputPostcode.value === ""){
      errorMsg.push("Please enter postcode.");
      setInputPostcode({value: "", css: "borderRed"});
    }     
    //console.log(errorMsg);
    return errorMsg;
  }

  const submitForm = e => {

    e.preventDefault();
    let validation = validateForm(e);
    //there was an error
    if(validation.length > 0){
        setMessageOnSubmit(( validation ));
      
    } else {
      console.log('success');  
    }

   //console.log(validation);
  }

//console.log('lorem', messageOnSubmit);
    return (    
      <form onSubmit={ submitForm }>
        <div className="errorMsg">
        { messageOnSubmit.map((line, i) => <MsgLine line={line} key={i} />)}
        </div>
        <div className="form-row">
          <label>Type of location</label>
          <div className={ locationType.css } >
            <div className="form-check-inline">
              <input 
              type="radio" 
              name="locationType" 
              id="inlineRadio1"
              onChange={ handleRadioPublic }  
              value="public area" 
              checked = {locationType.value === "public area" }
              />
              <label htmlFor="inlineRadio1">Public Area</label>
            </div>
            <div className="form-check-inline">
              <input 
              type="radio" 
              name="locationType" 
              id="inlineRadio2" 
              value="private property" 
              onChange={ e => setLocationType({value: e.target.value}) }  
              checked={ locationType.value === "private property" }
              />
              <label htmlFor="inlineRadio2">Private Property </label>
            </div>
          </div>
        </div>
        <div hidden={locationType.value === "private property" ? "" : "hidden"} >
          <div className="form-row">
            <label htmlFor="inputName">Full Name</label>
            <div>
              <input 
              type="text" 
              id="inputName"
              name="inputName"
              onChange = { e => setInputName({value: e.target.value}) }
              value = { inputName.value } 
              className={ inputName.css }
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
              onChange = { e => setInputEmail({value: e.target.value}) }
              value = { inputEmail.value }
              className = { inputEmail.css }
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
            className={ inputAppliance.css }
            onChange={e => setInputAppliance(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="washing machine">Washing Machine</option>
              <option value="fridge">Fridge</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputHouseNo">House/Building No</label>
          <div>
            <input 
            type="text"
            id="inputHouseNo"
            value={ inputHouseNo.value }
            className={ inputHouseNo.css }
            onChange={ e => setInputHouseNo(e.target.value) }
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputStreet">Street</label>
          <div>
            <input 
            type="text"
            id="inputStreet" 
            value={ inputStreet.value }
            className={ inputStreet.css }
            onChange={ e => setInputStreet(e.target.value) }
            />
          </div>
        </div> 
        <div className="form-row">
          <label htmlFor="inputTown">Town/City</label>
          <div>
            <input 
            type="text"
            id="inputTown" 
            value={ inputTown.value }
            className={ inputTown.css }
            onChange={ e => setInputTown(e.target.value) }
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputPostcode" >Postcode</label>
          <div>
            <input 
            type="text" 
            id="inputPostcode" 
            value={ inputPostcode.value }
            className={ inputPostcode.css }
            onChange={ e => setInputPostcode(e.target.value) }
            />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputNotes">Notes
          <br/><small>Please describe location in detail. What is parking situation and access to the appliance?</small>
          </label>
          <div className="textarea-wrapper">
            <textarea 
            id="inputNotes"
            name="inputNotes"
            value={ inputNotes.value }
            className={ inputNotes.css }
            onChange={ e => setInputNotes(e.target.value) }
            ></textarea>
          </div>
        </div>
        <div className="form-row text-right">
            <button type="submit">Submit</button>
        </div>      
      </form>
    );
}
function MsgLine(props) {
  //console.log('aaa', props.msgArray, props.css);
  return(   
      <span>{ props.line }</span>
  );

}

export default FormReport;