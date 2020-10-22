/**
 * Parses Date to localized date
 * @param {string} date Date string
 * @returns {string} Localized date
 */
export const parseDate = date => {

  /**
   * @type {Date}
   */
  const d = new Date(date)

  return d.toLocaleDateString();

}

/**
 * Parses a query string into an a new object
 * @param {string} queryString Query string without path
 * @returns {Object} Resulting object
 */
export const parseQueryString = queryString => {

  /**
   * @type {string[]}
   */
  const parts = queryString.split('&');

  /**
   * @type {Object}
   */
  const queries = {};

  // Populate queries object
  parts.forEach(val => {
    const parts = val.split('=');
    queries[parts[0]] = parts[1];
  });

  return queries;

}

/**
 * Parses Date to localized time
 * @param {string} date Date string
 * @returns {string} Localized time
 */
export const parseTime = date => {

  /**
   * @type {Date}
   */
  const d = new Date(date);

  return d.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  });

};
