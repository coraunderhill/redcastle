// Import modules
import React from 'react';
import navItems from '@common/navItems';
import { home } from '@common/navigate';

/**
 * macOS navigation group item component
 * @param {Object} props Component properties
 * @param {boolean} props.active Flags the item as active
 * @param {string} props.icon Item icon
 * @param {string} props.label Item label
 * @param {string} props.name Item name
 * @param {string} props.path Item path
 * @returns {JSX.Element} React component
 */
const NavItem = props => {

  const {
    active,
    icon,
    label,
    name,
    path,
  } = props;

  /**
   *  Navigation item onClick handler
   * @param {string} i Item name
   */
  const _onClick = i => {
    if (i === 'home') home();
  }

  return (
    <a
      className={`nav-group-item ${(active) ? 'active' : ''}`}
      onClick={() => _onClick(name)}
    >
      <span className={`icon icon-${icon}`}></span>
      <span className="item-label">{label}</span>
    </a>
  );

}

/**
 * macOS navigation component
 * @returns {JSX.Element} React component
 */
const Nav = () => {

  /**
   * Array of NavItem components
   * @type {Array}
   */
  const items = navItems().map(({ icon, label, name, path } ) => {
    // Deconstruct history state
    const { state } = history;

    /**
     * Sets the active flag for each item
     * @type {boolean}
     * @default
     */
    const isActive = (path === state.url);

    return <NavItem
      active={isActive}
      icon={icon}
      key={name}
      label={label}
      name={name}
    />;
  });

  return (
    <div className="nav">
      <nav className="nav-group">
        <h5 className="nav-group-title">Locations</h5>
        {items}
      </nav>
    </div>
  );
}

export default Nav;
