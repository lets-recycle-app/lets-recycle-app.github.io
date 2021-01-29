/* eslint-disable */
const axios = require('axios');

/**
 * this makes GET call using axios
 * @param url - string, full url
 * @param dataOnly - bolean. If true will return only data, if false full response
 */

export const makeGetCall = async (url, dataOnly = true) => {
  try {
    const response = await axios.get(url);
    // console.log('lorem = ', response);
    let lorem = response.data;
    if (!dataOnly) {
      lorem = response;
    }
    // console.log('lorem = ', lorem);
    return lorem; 
  } catch (error) {
    // console.error('my error = ', error);
    return error;
  }
};

// WARNING!!! NOT TESTED!!!
export const makePostCall = async (url) => {
  try {
    const response = await axios.post(url);
    // console.log(response);
    return response;
  } catch (error) {
    // console.error(error);
  }
};
