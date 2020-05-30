// Import Node modules
import React from 'react';
import { Nav as FluentNav } from '@fluentui/react/lib/Nav';

// Import navigation module
import { mostPopular } from 'Common/navigate';

// Import nav items
import navItems from 'Common/navItems';

// Import resources
import 'Static/scss/platform/_win32-nav';

/**
 * Windows navigation component
 * @returns {Object} React component
 */
const Nav = () => {

  const _onLinkClick = (e, item) => {

    if (!item) return null;
    if (item.name === 'Home') mostPopular();

  }

  // Iterate over menu items
  const items = navItems().map(({ icon, label, path} ) => (
    { icon: icon, name: label }
  ));

  // Create navigation groups
  const navGroups = [{ links: items }];

  return <FluentNav
    groups={navGroups}
    onLinkClick={_onLinkClick}
  />;

}

export default Nav;
