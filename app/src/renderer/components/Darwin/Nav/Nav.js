// Import Node modules
import React from 'react';

// Import React components
import NavItem from './NavItem';

// Import nav items
import navItems from 'Common/navItems';

/**
 * macOS nav wrapper
 * @returns {JSX.Element} React component
 */
const Nav = () => {

  /**
   * Array of NavItem components
   * @type {Array}
   */
  const items = navItems().map(({ icon, label, name} ) => (
    <NavItem
      icon={icon}
      key={name}
      label={label}
      name={name}
    />
  ));

  return (
    <div className="nav">
      <nav className="nav-group">
        <h5 className="nav-group-title">Favorites</h5>
        {items}
      </nav>
    </div>
  );
}

export default Nav;
