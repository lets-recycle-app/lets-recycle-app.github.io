import {useState} from 'react';
import DriversListItem from '../DriversListItem/DriversListItem.js';

function PageDriversList() {
  let storageItems = [];
  if (localStorage.getItem('colRequest')) {
      storageItems = JSON.parse(localStorage.getItem('colRequest'));
      storageItems = storageItems.reverse();
  }
  //console.log(storageItems);
  const hardcodedItems = [
    {id:1, datetime:"2020-12-17", type:"collection", completed:true, houseNo:"123", street:"Some St", town:"Some Town", postcode:"ST1 2AB", item:"washing machine", locationType:"public area", notes:"in the back alley"},
    {id:2, datetime:"2020-12-17", type:"collection", completed:false, houseNo:"45", street:"Some Other St", town:"Some Other Town", postcode:"ST2 3CD", item:"fridge", locationType:"private property", notes:""},
    {id:3, datetime:"2020-12-17", type:"collection", completed:false, houseNo:"67", street:"Lorem Ipsum", town:"Dolor sit amet", postcode:"ABC 123", item:"dish washer", locationType:"private property", notes:"no parking in front"},
    {id:4, datetime:"2020-12-18", type:"collection", completed:false, houseNo:"89", street:"Adipiscing", town:"Consectetur", postcode:"ABC 123", item:"dish washer", locationType:"private property", notes:"no parking in front"},
  ];
  const allItems = storageItems.concat(hardcodedItems);
  //console.log(allItems);
  const [dirversItems, setDriversItems] = useState(allItems);

  //const todaysDriversItems = dirversItems.filter(item => item.datetime === "2020-12-17");

    return (
        <div className="main-column">
          {/* <h1>Your todays route is listed below.</h1> */}
          <h1>Latest requests are listed below.</h1>
          { dirversItems.map(item => 
            <DriversListItem 
            key={item.id}
            id={item.id}
            houseNo={item.houseNo} 
            street={item.street} 
            town={item.town} 
            postcode={item.postcode}
            completed={item.completed}
            type={item.type}
            item={item.item}
            locationType={item.locationType}
            notes={item.notes}
            />   
          )}
        </div>
    );
}

export default PageDriversList;