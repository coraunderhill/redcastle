// Import Node modules
import React from 'react';

// Import menu from JSON file
import menuItems from 'Static/json/menu-nav.json';

// Import Nav view
import NavView from './NavView';

// Import theme component getter
import { getThemeComponent } from 'Components/Theme/';

/**
 * Navigation component
 * @returns {Object} React component
 */
const Nav = () => {

  const Wrapper = getThemeComponent('Nav');

  // Iterate over menu items and map to new list
  const items = [];
  for (let [key, val] of Object.entries(menuItems)) {
    const item = {
      label: val.label,
      name: key,
      path: val.path,
    };

    items.push(item);
  }

  return (
    <Wrapper>
      <NavView items={items} />
    </Wrapper>
  );
}

export default Nav;
