// Import Node modules
import React from 'react';

// Import navigation module
import { mostPopular } from 'Common/navigate';

/**
 * macOS navigation group item
 * @param {Object} props Component properties
 * @param {string} props.label Item's label
 * @param {string} props.path = Link path
 * @returns {Object} React component
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
    if (i === 'home') mostPopular();
  }

  return (
    <a className="nav-group-item" onClick={() => _onClick(name)}>
      <span className={`icon icon-${icon}`}></span>
      <span className="item-label">{label}</span>
    </a>
  );

}

export default NavItem;
