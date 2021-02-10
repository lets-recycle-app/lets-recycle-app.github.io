import React from 'react';
import FormManageCollection from '../FormManageCollection/FormManageCollection.js';

function PageManageCollection() {
  return (
    <div className="main-column">
      <h1>Manage Your Collection</h1>
      <p>You are going to need the reference number to access your collection.</p>
      <FormManageCollection />
    </div>
  );
}

export default PageManageCollection;
