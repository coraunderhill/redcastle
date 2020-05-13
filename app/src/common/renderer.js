// Import Node modules
import React from 'react';
import { render } from 'react-dom';

// Import React components
import Header from '../components/Header/Header';
import List from '../components/List/List';
import Nav from '../components/Nav/Nav';

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

  const ui = <div className="window">
    <Header />
    <div className="window-content">
      <div className="pane-group">
        <div className="pane-sm sidebar">
          <Nav />
        </div>
        <div className="pane">
          {view}
        </div>
      </div>
    </div>
  </div>;

  render(ui, document.getElementById('root'));
}
