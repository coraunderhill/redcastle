// Import modules
import { list } from '@common/client';
import { pushState } from '@common/history';
import updateView from '@common/renderer';

/**
 * Render the List component with popular videos
 */
export const home = () => {

  /**
   * Sets the API parameters
   * @type {Object}
   */
  const params = {
    chart: 'mostPopular',
    part: 'id,snippet',
    regionCode: 'US',
  };

  // Call API and update view
  list(params).then(res => {
    pushState('/');
    updateView('List', res.data);
  });
}

/**
 * Render the Watch component with a selected video
 * @param {string} videoID ID of the video to display
 */
export const watch = videoID => {

  /**
   * Sets the API parameters
   * @type {Object}
   */
  const params = {
    id: videoID,
    part: 'snippet,statistics',
  };

  // Call API and update view
  list(params).then(res => {
    /**
     * youtube#video API response object
     * @type {Object}
     */
    const item = res.data.items.shift();

    pushState(`/watch?v=${videoID}`);
    updateView('Watch', item);
  });

}
