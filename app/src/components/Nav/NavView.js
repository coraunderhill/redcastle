// Import Node modules
import React from 'react';

// Import theme component getter
import { getThemeComponent } from 'Components/Theme';

/**
 * Navigation view
 * @param {Object} props Component properties
 * @param {Object} props.items Navigation items to be rendered
 * @returns {Object} React component
 */
const NavView = props => {

  const { items } = props;

  const NavItem = getThemeComponent('NavItem');

  // Iterate over items and map to new list
  const navItems = items.map(({label, name, path}) => (
    <NavItem key={name} label={label} name={name} path={path} />
  ));

  return navItems;

}

export default NavView;
