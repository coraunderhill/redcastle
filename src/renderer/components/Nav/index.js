import React from 'react';

import NavItem from './NavItem';

import navItems from '@static/json/nav';

/**
 * Main navigation component
 * @returns {JSX.Element} React component
 */
const Nav = () => {

  /**
   * @type {JSX.Element[]}
   */
  const children = [];

  // Populate nav items
  for (const [key, val] of Object.entries(navItems)) {
    children.push(
      <NavItem
        icon={val.icon}
        key={key}
        label={val.label}
        path={key}
      />
    );
  }

  return (
    <nav id="main">
      <ul id="nav-main">
        {children}
      </ul>
    </nav>
  );

}

export default Nav;
