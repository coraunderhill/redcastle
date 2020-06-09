// Import Node modules
import React from 'react';

// Import navigation module
import { home } from 'Common/navigate';

/**
 * macOS navigation group item component
 * @param {Object} props Component properties
 * @param {string} props.icon Item icon
 * @param {string} props.label Item label
 * @param {string} props.path = Link path
 * @returns {JSX.Element} React component
 */
export const NavItem = props => {

  const {
    icon,
    label,
    name,
  } = props;

  /**
   *  Navigation item onClick handler
   * @param {string} i Item name
   */
  const _onClick = i => {
    if (i === 'home') home();
  }

  return (
    <a className="nav-group-item" onClick={() => _onClick(name)}>
      <span className={`icon icon-${icon}`}></span>
      <span className="item-label">{label}</span>
    </a>
  );

}

export default NavItem;
