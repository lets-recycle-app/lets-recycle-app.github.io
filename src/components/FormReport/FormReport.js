import "./FormReport.css";
import {useState} from "react";

function FormReport() {
  const [locationType, setLocationType] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAppliance, setInputAppliance] = useState("");
  const [inputHouseNo, setInputHouseNo] = useState("");
  const [inputStreet, setInputStreet] = useState("");
  const [inputTown, setInputTown] = useState("");
  const [inputPostcode, setInputPostcode] = useState("");
  const [inputNotes, setInputNotes] = useState("");

  const handleRadioPublic = e => {
    setLocationType(e.target.value);
    setInputName("");
    setInputEmail("");
  }

  const submitForm = e => {
    
    //console.log(locationType, inputName, inputEmail, inputAppliance, inputHouseNo,inputStreet, inputTown, inputPostcode, inputNotes);

  }

    return (
      <form>
        <div className="form-row">
          <label>Type of location</label>
          <div>
            <div className="form-check-inline">
              <input 
              type="radio" 
              name="locationType" 
              id="inlineRadio1"
              onChange={ handleRadioPublic }  
              value="public area" 
              checked = {locationType === "public area" }
              />
              <label htmlFor="inlineRadio1">Public Area</label>
            </div>
            <div className="form-check-inline">
              <input 
              type="radio" 
              name="locationType" 
              id="inlineRadio2" 
              value="private property" 
              onChange={ e => setLocationType(e.target.value) }  
              checked={ locationType === "private property" }
              />
              <label htmlFor="inlineRadio2">Private Property </label>
            </div>
          </div>
        </div>
        <div hidden={locationType === "private property" ? "" : "hidden"} >
          <div className="form-row">
            <label htmlFor="inputName">Full Name</label>
            <div>
              <input 
              type="text" 
              id="inputName"
              name="inputName"
              onChange = { e => setInputName(e.target.value) }
              value = { inputName } 
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
              onChange = { e => setInputEmail(e.target.value) }
              value = { inputEmail }
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
            value={inputAppliance} 
            onChange={e => setInputAppliance(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="washing machine">Washing Machine</option>
              <option value="fridge">Fridge</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputHouseNo">House No</label>
          <div>
            <input 
            type="text"
            id="inputHouseNo"
            value={ inputHouseNo }
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
            value={ inputStreet }
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
            value={ inputTown }
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
            value={ inputPostcode }
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
            value={ inputNotes }
            onChange={ e => setInputNotes(e.target.value) }
            ></textarea>
          </div>
        </div>
        <div className="form-row text-right">
            <button type="submit" onClick={ submitForm } >Submit</button>
        </div>      
      </form>
    );
}

export default FormReport;