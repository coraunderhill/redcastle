// Import Node modules
import React from 'react';
import { render } from 'react-dom';

// Import React components
import Header from '../components/Header/Header';
import List from '../components/List/List';

export const updateView = data => {
  const dataType = data.kind;
  let view;

  switch (dataType) {
    case 'youtube#videoListResponse':
    view = <List data={data} />
  }

  const ui = <div>
    <Header />
    {view}
  </div>;

  render(ui, document.getElementById('root'));
}
