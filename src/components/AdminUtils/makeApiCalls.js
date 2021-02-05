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

export async function getDriverById(driverId) {
  const objDriver = getDataByField('drivers', 'driverId', driverId);
  return objDriver;
}

export async function getAdminById(adminId) {
  const objAdmin = getDataByField('admins', 'adminId', adminId);
  return objAdmin;
}

export async function getAddressById(addressId) {
  const objAddress = getDataByField('addresses', 'addressId', addressId);
  return objAddress;
}
