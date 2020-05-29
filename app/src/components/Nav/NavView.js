// Import Node modules
import React from 'react';

// Import theme component getter
import { getThemeComponent } from 'Components/Theme';

/**
 * Navigation view
 * @param {Object} props Component properties
 * @param {Object} props.items Navigation items to be rendered
 * @returns {Array} React components
 */
const NavView = props => {

  const { items } = props;

  // Import NavItem wrapper component from theme
  const Nav = getThemeComponent('Nav');
  const NavContent = getThemeComponent('NavContent');

  const content = <NavContent items={items} />;

  return (
    <Nav>
      {content}
    </Nav>
  );

}

export default NavView;
