import React from 'react';
import { Link } from 'react-router-dom';
import FormReport from '../FormReport/FormReport.js';

function PageContentLanding() {
  return (
    <div className="main-column">
      <h1>AO Appliance Recycling</h1>
      <h2>
      <p>We recycle appliances that are no longer needed
        or that have been left abandoned in a public area. </p>
    <p>Please fill in a request below and let us pick the appliance
      and recycle it.</p></h2>
      <Link to="/about"><h2>Learn more about AO green initiatives ...</h2></Link>
      <FormReport />
    </div>
  );
}

export default PageContentLanding;
