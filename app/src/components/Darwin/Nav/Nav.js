// Import Node modules
import React from 'react';

// Import React components
import NavItem from './NavItem';

// Import nav items
import navItems from 'Common/navItems';

/**
 * macOS nav wrapper
 * @returns {Object} React component
 */
const Nav = () => {

  // Iterate over nav items
  const items = navItems().map(({ icon, label, path} ) => (
    <NavItem
      icon={icon}
      key={label}
      label={label}
      path={path}
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
