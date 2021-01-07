import postcodes from 'node-postcodes.io';

/**
 *
 * @param min
 * @param max
 * @returns {number}
 */

export const getRandomInt = (min = 0, max = 2) => {
  // Both The maximum and minimum are inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 *
 * @param codeToCheck
 * @returns {Promise<boolean>}
 */

export const isPostCodeValid = async (codeToCheck) => {
  const postCodeDetails= await getPostCodeDetails(codeToCheck);
  return postCodeDetails.status !== 404;
}

/**
 *
 * @param codeToCheck
 * @returns {Promise<unknown>}
 */
export const getPostCodeDetails = async (codeToCheck) => {
  return await postcodes.lookup(codeToCheck,
    {filter: 'postcode,longitude,latitude'}
  );
}

/**
 * Calculates the haversine distance in miles or km between two (latitude,longitude) coordinates.
 * @param [latitudeA, longitudeA] point A
 * @param [latitudeB, longitudeB] point B
 * @param {boolean} inMiles if true (default), km otherwise.
 */

export const distanceBetween = ([latA, lonA], [latB, lonB], inMiles = true) => {
  const toRadian = angle => (Math.PI / 180) * angle;
  const distance = (a, b) => (Math.PI / 180) * (a - b);
  const RADIUS_OF_EARTH_IN_KM = 6371;

  const dLat = distance(latB, latA);
  const dLon = distance(lonB, lonA);

  latA = toRadian(latA);
  latB = toRadian(latB);

  // Haversine Formula
  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.pow(Math.sin(dLon / 2), 2) * Math.cos(latA) * Math.cos(latB);
  const c = 2 * Math.asin(Math.sqrt(a));

  let finalDistance = RADIUS_OF_EARTH_IN_KM * c;

  if (inMiles) {
    finalDistance /= 1.60934;
  }

  return finalDistance;
};


