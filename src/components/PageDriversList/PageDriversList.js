import DriversListItem from '../DriversListItem/DriversListItem.js';
function PageDriversList() {
    return (
        <div className="main-column">
          <h1>Your todays route is listed below.</h1>
          <DriversListItem 
          houseNo="123" 
          street="Some St" 
          town="Some Town" 
          postcode="ST1 2AB"
          completed="true"
          type="collection"
          />
          <DriversListItem houseNo="123" street="Some St" town="Some Town" postcode="ST1 2AB"/>
          <DriversListItem houseNo="123" street="Some St" town="Some Town" postcode="ST1 2AB"/>
        </div>
    );
}

export default PageDriversList;