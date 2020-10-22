/**
 * Adds the passed string to the history state object
 * @param {string} url URL to add to history state
 */
export const pushState = url => {

  /**
   * New history state object
   * @type {Object}
   */
  const newState = {};

  // Deconstruct history state
  const { state } = history;

  // Set the state index and URL
  newState.i = (state === null) ? 0 : state.i + 1;
  newState.url = url;

  // Update the history state
  history.pushState(newState, '');

}
