import postcodes from 'node-postcodes.io';
import { round } from './mathUtils.js';

/**
 *
 * @param codeToCheck
 * @returns {Promise<unknown>}
 */
export const getPostCodeDetails = async (codeToCheck) => postcodes.lookup(codeToCheck,
  { filter: 'postcode,longitude,latitude' });

/**
 *
 * @param codeToCheck
 * @returns {Promise<boolean>}
 */

export const isPostCodeValid = async (codeToCheck) => {
  const postCodeDetails = await getPostCodeDetails(codeToCheck);
  return postCodeDetails.status !== 404;
};

/**
 * Calculates the haversine distance in miles between two (latitude,longitude) coordinates.
 * @param [latitudeA, longitudeA] point A
 * @param [latitudeB, longitudeB] point B
 * @param {boolean} earth radius in Miles.
 */

export const distanceBetween = ([latA, lonA], [latB, lonB]) => {
  const toRadian = (angle) => (Math.PI / 180) * angle;
  const distance = (a, b) => (Math.PI / 180) * (a - b);
  const earthRadiusInMiles = 3958.8;

  const dLat = distance(latB, latA);
  const dLon = distance(lonB, lonA);

  const radianLatA = toRadian(latA);
  const radianLatB = toRadian(latB);

  // Haversine Formula
  const a = (Math.sin(dLat / 2) ** 2)
    + (Math.sin(dLon / 2) ** 2)
    * Math.cos(radianLatA) * Math.cos(radianLatB);

  const c = 2 * Math.asin(Math.sqrt(a));

  return round(earthRadiusInMiles * c, 2);
};
