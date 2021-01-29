/**
 * this accepts full js date and returns formatted
 * @param {date object} myDate - full js date object
 * @param {string} format can be 'user' or 'db'. First returns dd-mm-yyyy, second yyyy-mm-dd. DEFAULT IS USER!!!
 */

export const formatDate = (myDate, format = 'user') => {
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
