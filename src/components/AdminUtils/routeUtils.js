export const postcodes = require('node-postcodes.io');

export const getRandomInt = (min = 0, max = 2) => {
  // Both The maximum and minimum are inclusive
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const isPostCodeValid = async (codeToCheck) => {
  const postCodeDetails= await getPostCodeDetails(codeToCheck);
  return postCodeDetails.status !== 404;
}

export const getPostCodeDetails = async (codeToCheck) => {
  return await postcodes.lookup(codeToCheck,
    {filter: 'postcode,longitude,latitude'}
  );
}