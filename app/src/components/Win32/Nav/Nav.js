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

  /**
   *  Handles navigation link click events
   * @param {Event} e onClick event
   * @param {Object} item User-selected item
   */
  const _onLinkClick = (e, item) => {

    const { name } = item;

    if (name === 'Home') mostPopular();

  }

  /**
   * Renders navigation group headers
   * @param {Object} group Navigation group
   * @returns {Object} React component
   */
  const _onRenderGroupHeader = group => <h3>{group.name}</h3>;

  // Iterate over menu items
  // We set i low so that it starts at zero in our loop
  let i = -1;
  const items = navItems().map(({ icon, label} ) => {
    switch (icon) {
      case 'home': {
        break;
      }
    }

    i++;

    return {
      icon: icon,
      key: `item${i}`,
      name: label,
    };
  });

  const groups = [{
    name: 'Redcastle',
    links: items,
  }];

  return <FluentNav
    groups={groups}
    initialSelectedKey="item0"
    onLinkClick={_onLinkClick}
    onRenderGroupHeader={_onRenderGroupHeader}
  />;

}

export default Nav;
