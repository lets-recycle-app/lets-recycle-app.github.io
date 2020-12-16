function FormReport() {
    return (
      <form>
        <div className="form-group row">
          <label htmlFor="inputAppliance" className="col-md-3 col-form-label">Appliance</label>
          <div className="col-md-9">
            <input type="text"  className="form-control" id="inputAppliance" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputNumber" className="col-md-3 col-form-label">House No</label>
          <div className="col-md-9">
            <input type="text"  className="form-control" id="inputNumber" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputStreet" className="col-md-3 col-form-label">Street</label>
          <div className="col-md-9">
            <input type="text" className="form-control" id="inputStreet" />
          </div>
        </div> 
        <div className="form-group row">
          <label htmlFor="inputTown" className="col-md-3 col-form-label">Town/City</label>
          <div className="col-md-9">
            <input type="text" className="form-control" id="inputTown" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputPostcode" className="col-md-3 col-form-label">Postcode</label>
          <div className="col-md-9">
            <input type="text" className="form-control" id="inputPostcode" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputNotes" className="col-md-3 col-form-label">Notes</label>
          <div className="col-md-9">
            <textarea className="form-control" id="inputNotes"></textarea>
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="inputNotes" className="col-md-4 col-form-label">Type of collection</label>
          <div className="col-md-8">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
              <label className="form-check-label" htmlFor="inlineRadio1">Public Area</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
              <label className="form-check-label" htmlFor="inlineRadio2">Private Property</label>
            </div>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="inputName" className="col-md-3 col-form-label">Full Name</label>
          <div className="col-md-9">
            <input type="text" className="form-control" id="inputName" />
          </div>
        </div>                  
        <div className="form-group row">
          <label htmlFor="email" className="col-md-3 col-form-label">Email</label>
          <div className="col-md-9">
            <input type="text"  className="form-control" id="email" />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-12 text-right">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>      
      </form>
    );
}

export default FormReport;