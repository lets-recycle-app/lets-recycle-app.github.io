/* eslint-disable */
import { makeGetCall } from '../AdminUtils/makeAxiosCalls.js';
import { formatDbDate } from '../AdminUtils/formatDate.js';

/**
 * This function returns object containing two arrays: one with dates, second with ref numbers
 * @param {string} postcode 
 */ 
const getDatesForPostcode = async (postcode) => {
  // postcode = 'M18 7TQ'; // eslint-disable-line
  const url = `https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/collect-request?${postcode}`;
  const data = await makeGetCall(url);
  // console.log(data);
  let arrDates = [];
  let arrRefNos = [];
  if (data.result.length > 0) {
    // eslint-disable-next-line
    for (const res of data.result) {
      arrDates.push(formatDbDate(res.date));
      arrRefNos.push(res.refNo);
    }
  }
  const myObj = {arrDates, arrRefNos};
  // console.log(myObj);
  return myObj;
};

export default getDatesForPostcode;
