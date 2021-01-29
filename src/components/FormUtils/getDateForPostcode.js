import { makeGetCall } from '../AdminUtils/makeAxiosCalls.js';

const getDatesForPostcode = async (postcode) => {
  postcode = '10'; // eslint-disable-line
  const url = `https://a0br3o0i7b.execute-api.eu-west-2.amazonaws.com/api/drivers/${postcode}`;
  const data = await makeGetCall(url);
  console.log(data);
  const myArray = [];
  if (data[0].driverName) {
    myArray.push(data[0].driverName);
  }
  return myArray;
};

export default getDatesForPostcode;
