import "./FormReport.css";
function FormReport() {
    return (
      <form>
        <div className="form-row">
          <label>Type of location</label>
          <div>
            <div className="form-check-inline">
              <input type="radio" name="locationType" id="inlineRadio1" value="public area" />
              <label htmlFor="inlineRadio1">Public Area</label>
            </div>
            <div className="form-check-inline">
              <input type="radio" name="locationType" id="inlineRadio2" value="private property" />
              <label htmlFor="inlineRadio2">Private Property</label>
            </div>
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="inputName">Full Name</label>
          <div>
            <input type="text" id="inputName" />
          </div>
        </div>                  
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <div>
            <input type="text"  id="email" />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputAppliance">Appliance Type</label>
          <div>
            <select id="inputAppliance" name="appliance">
              <option value="">Select...</option>
              <option value="washing machine">Washing Machine</option>
            </select>
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputNumber">House No</label>
          <div>
            <input type="text"  id="inputNumber" />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputStreet">Street</label>
          <div>
            <input type="text" id="inputStreet" />
          </div>
        </div> 
        <div className="form-row">
          <label htmlFor="inputTown">Town/City</label>
          <div>
            <input type="text" id="inputTown" />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputPostcode" >Postcode</label>
          <div>
            <input type="text" id="inputPostcode" />
          </div>
        </div>
        <div className="form-row">
          <label htmlFor="inputNotes">Notes
          <br/><small>Please describe location in detail. What is parking situation and access to the appliance?</small>
          </label>
          <div className="textarea-wrapper">
            <textarea id="inputNotes"></textarea>
          </div>
        </div>
        <div className="form-row text-right">
            <button type="submit" className="btn btn-primary">Submit</button>

        </div>      
      </form>
    );
}

export default FormReport;