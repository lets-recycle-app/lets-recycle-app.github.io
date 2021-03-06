/* eslint-disable */
import { makeGetCall } from '../AdminUtils/makeAxiosCalls.js';
import { formatDbDate } from '../AdminUtils/formatDate.js';

/**
 * This function returns object containing two arrays: one with dates, second with ref numbers
 * @param {string} postcode
 */
const getDatesForPostcode = async (postcode) => {
  const url = `https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/collect-request?postcode=${postcode}`;
  const data = await makeGetCall(url);

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
  return myObj;
};

export default getDatesForPostcode;
