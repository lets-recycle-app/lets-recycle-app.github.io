function PageManageCollection() {
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
                onChange=""
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
                onChange=""
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
      {/* <FormReport /> */}
    </div>
  );
}

export default PageManageCollection;
