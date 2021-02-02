/* eslint-disable */
/**
 * this accepts full js date and returns formatted
 * @param {date object} myDate - full js date object
 * @param {string} format can be 'user' or 'db'. First returns dd-mm-yyyy, second yyyy-mm-dd. DEFAULT IS USER!!!
 */

export const formatFullDate = (myDate, format = 'user') => {
  let day = myDate.getDate();
  if (day < 10) { day = `0${day}`; }
  let month = (myDate.getMonth() + 1);
  if (month < 10) { month = `0${month}`; }
  const year = myDate.getFullYear();
  if (format === 'user') {
    return `${day}-${month}-${year}`;
  }
  if (format === 'db') {
    return `${year}-${month}-${day}`;
  }
};

/**
 * this accepts yyyy-mm-dd date and returns dd-mm-yyyy
 * @param {string} dbDate - yyyy-mm-dd
 */
export const formatDbDate = (dbDate) => {
  const day = dbDate.slice(8, 10);
  const month = dbDate.slice(5, 7);
  const year = dbDate.slice(0, 4);

  return `${day}-${month}-${year}`;
};
