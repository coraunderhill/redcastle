// Import Node modules
import React from 'react';

// Import React components
import Watch from 'Components/Watch/Watch';

// Import React renderer
import updateView from './renderer';

/**
 * Render the Watch component with a selected video
 * @param {string} videoID ID of the video to display
 */
export const watchVideo = videoID => updateView(<Watch videoID={videoID} />);
