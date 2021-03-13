/**
 * Checks if a given date is today
 * @param {string} date Date string
 * @returns {number} 1 for today, 0 for yesterday, -1 otherwise
 */
export const isRecent = date => {

  const today = new Date();
  const input = new Date(date);
  const yesterday = new Date(today);

  yesterday.setDate(yesterday.getDate() - 1);

  const inDay = input.getDate();
  const inMonth = input.getMonth();
  const inYear = input.getFullYear();

  if (
    inDay === today.getDate()
    && inMonth === today.getMonth()
    && inYear === today.getFullYear()
  ) { return 1 }
  else if (
    inDay === yesterday.getDate()
    && inMonth === yesterday.getMonth()
    && inYear === yesterday.getFullYear()
  ) { return 0 }
  else return -1;

}

/**
 * Parses Date to localized date
 * @param {string} date Date string
 * @returns {string} Localized date
 */
export const parseDate = date => new Date(date).toLocaleDateString();

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
export const parseTime = date => new Date(date).toLocaleTimeString([], {
  hour: 'numeric',
  minute: '2-digit',
});
