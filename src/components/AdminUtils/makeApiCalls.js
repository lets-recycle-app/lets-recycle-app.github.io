/* eslint-disable */
import { makePostCall, makeGetCall } from './makeAxiosCalls.js';

/**
 * this returns an object array of all data rows as objects
 * @param {string} table - table we are querying (the word in url after the last slash) eg divers, routes, depots
 */
export async function getAllData(table) {
  const url = `https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/${table}`;

  const response = await makeGetCall(url);
  let objResult = {};
  if (response.result !== undefined && response.result.length > 0) {
    if (response.result.length === 1) {
      objResult = response.result[0];
    } else {
      objResult = response.result;
    }
  }
  return objResult;
}

/**
 * this returns an object (if was called by unique id and returned only one row of data) or array of objects (if more rows returned)
 * @param {string} table - table we are querying (the word in url after the last slash) eg divers, routes, depots
 * @param {string} fieldName - field in where clause (usually id, but not only)
 * @param {string} fieldVal - value of the field 
 */
export async function getDataByField(table, fieldName, fieldVal) {
  const url = `https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/${table}?${fieldName}=${fieldVal}`;

  const response = await makeGetCall(url);
  let objResult = {};
  if (response.result !== undefined && response.result.length > 0) {
    if (response.result.length === 1) {
      objResult = response.result[0];
    } else {
      objResult = response.result;
    }
  }
  return objResult;
}

export const getDriverById = async (driverId) => {
  const objDriver = getDataByField('drivers', 'driverId', driverId);
  return objDriver;
}

export const getAdminById = async (adminId) => {
  const objAdmin = getDataByField('admins', 'adminId', adminId);
  return objAdmin;
}

export const getAddressById = async (addressId) => {
  const objAddress = getDataByField('addresses', 'addressId', addressId);
  return objAddress;
}

export const getDriversItems = async (driverId, date) => {
  const url = `https://1t4ggjq9kl.execute-api.eu-west-2.amazonaws.com/prod/api/routes?driverId=${driverId}&routeDate=${date}`;
  const data = await makeGetCall(url);
  console.log(data);
  let myArray = [];
  if (data.result !== undefined && data.result.length > 0) {
    myArray = data.result;
  }
  return myArray;
};
