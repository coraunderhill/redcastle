// Import modules
import React from 'react';

/**
 * Navigation view
 * @param {Object} props Component properties
 * @returns {Object} React component
 */
const NavView = props => {

  const { items } = props;

  const navItems = [];

  for (let [key, val] of Object.entries(items)) {
    const {
      icon,
      isActive,
      text,
    } = val;

    navItems.push(
      <a className={`nav-group-item${isActive ? ' active' : ''}`} key={key}>
        <span className={`icon icon-${icon}`}></span>
        {text}
      </a>);
  }

  return (
    <div className="nav">
      <nav className="nav-group">
        <h5 className="nav-group-title">Favorites</h5>
        {navItems}
      </nav>
    </div>
  );

}

export default NavView;
