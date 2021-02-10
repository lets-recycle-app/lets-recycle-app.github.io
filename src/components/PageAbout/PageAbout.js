import React from 'react';

const appliances = [
  { id: 'Fridge', weighting: '1.0' },
  { id: 'Freezer', weighting: '1.0' },
  { id: 'Washer', weighting: '1.0' },
  { id: 'Dryer', weighting: '0.5' },
  { id: 'Oven', weighting: '0.5' },
  { id: 'Cooker', weighting: '0.5' },
  { id: 'Dishwasher', weighting: '1.0' },
];
function PageAbout() {
  return (
    <div className="main-column">
      <h1>About Us</h1>
      <h2>Who we are and what we do</h2>
      <p>We are AO.com recycle service. Anyone who wants to get rid of their old house appliance can request that we collect it. We will check if it is possible within next 7 days, and give you possible dates to choose from. If there is no collection available, you can opt in to the waiting list.</p>
      <h2>Frequently asked questions</h2>
      <p><strong>What appliances do you accept?</strong><br />
            Currently we accept the following:</p>

      <ul>
        {appliances.map((item, n) => <li key={n}> {item.id} </li>)}
      </ul>

      <p><strong>What should I do on the collection day?</strong><br />
            Please put out your appliance in front of your property.
            </p>
      <p><strong>What if I need to change/cancel the collection on the agreed date?</strong><br />
            You need your collection ID. Go to <a href="/manage-collection">this page</a> and use it to bring your collectin for an edit.</p>

    </div>
  );
}

export default PageAbout;
