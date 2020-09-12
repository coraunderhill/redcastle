/**
 * Parses Date object
 * @param {Date} date Date object
 * @returns {string} Localized date string
 */
export const parseDate = date => {
  const d = new Date();
  return d.toLocaleDateString();
}

/**
 * Parses Date object
 * @param {Date} date Date object
 * @returns {string} Localized time string
 */
export const parseTime = date => {
  const d = new Date();
  return d.toLocaleTimeString([], {
    hour: 'numeric',
    minute: '2-digit',
  });
};
