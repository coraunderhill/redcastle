// Import Node modules
import React from 'react';
import { render } from 'react-dom';

// Import React components
import Header from '../components/Header/Header';
import List from '../components/List/List';

/**
 * Update React view
 * @param {Object} data Data object to pass to React renderer
 */
export const updateView = data => {
  const dataType = data.kind;
  let view;

  // Match view to response type
  switch (dataType) {
    case 'youtube#videoListResponse':
    view = <List data={data} />
  }

  const ui = <div id="app">
    <Header />
    {view}
  </div>;

  render(ui, document.getElementById('root'));
}
