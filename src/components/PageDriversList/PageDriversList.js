import DriversListItem from '../DriversListItem/DriversListItem.js';
function PageDriversList() {
    return (
        <div className="main-column">
          <h1>Your todays route is listed below.</h1>
          <DriversListItem />
          <DriversListItem />
          <DriversListItem />
        </div>
    );
}

export default PageDriversList;