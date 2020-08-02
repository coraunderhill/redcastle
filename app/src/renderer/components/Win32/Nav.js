// Import modules
import React from 'react';
import { Nav as FluentNav } from '@fluentui/react/lib/Nav';

// Import navigation module
import { home } from '@common/navigate';

// Import nav items
import navItems from '@common/navItems';

/**
 * Windows navigation component
 * @returns {JSX.Element} React component
 */
const Nav = () => {

  /**
   *  Handles navigation link click events
   * @param {Event} e onClick event
   * @param {Object} item User-selected item
   */
  const _onLinkClick = (e, item) => {

    // Get the name of the clicked item
    const { name } = item;

    // Navigate accordingly
    if (name === 'Home') home();

  }

  /**
   * Renders navigation group headers
   * @param {Object} group Navigation group
   * @returns {JSX.Element} React component
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
