/* eslint-disable */
import axios from 'axios';
import React, { useState, useEffect } from 'react';

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
    const axios = require('axios');

    const refNo = 'D01R07S04T06';
    const url = `https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/collect-confirm?refNo=${refNo}`;

    const config = { headers: {'Content-Type': 'application/json'} };
    axios.post(url, request, config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }, []);

  return (
    <div className="main-column">
      <h1>Test Page</h1>

    </div>
  );
}

export default TestPage;
