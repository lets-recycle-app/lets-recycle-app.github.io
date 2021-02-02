/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { makePostCall } from '../AdminUtils/makeAxiosCalls';

function TestPage() {
  useEffect(async () => {
    const request = {
      locationType: 'private property',
      customerName: 'Jane Newman',
      customerEmail: 'aaa@aa.aa',
      itemType: 'washer',
      houseNo: '12',
      street: 'Some St',
      townAddress: 'Sometown',
      postcode: 'sk1 2lg',
      notes: 'lorem ipsum dolor sit amet',
    };
    // request.assignedDate = approvedDate;
    // console.log(request);

    // save request in the db

    const refNo = 'D01R07S04T06';
    const url = `https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/collect-confirm?refNo=${refNo}`;
    
    const lorem = await makePostCall(url, request);

    console.log('lorem = ', lorem);

  }, []);

  return (
    <div className="main-column">
      <h1>Test Page</h1>

    </div>
  );
}

export default TestPage;
