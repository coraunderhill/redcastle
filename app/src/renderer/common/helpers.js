/**
 * Parses Date object
 * @param {Date} date Date object
 * @returns {string} Localized date string
 */
export const parseDate = date => date.toLocaleDateString();

/**
 * Parses Date object
 * @param {Date} date Date object
 * @returns {string} Localized time string
 */
export const parseTime = date => (
  date.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  })
);
