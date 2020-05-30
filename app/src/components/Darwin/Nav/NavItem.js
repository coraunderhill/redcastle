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
  } = props;
  let { path } = props;

  // Determine appropriate onClick handler
  switch (path) {
    case '/': {
      path = mostPopular;
    }
  }

  return (
    <a className="nav-group-item" onClick={() => path()}>
      <span className={`icon icon-${icon.toLowerCase()}`}></span>
      <span className="item-label">{label}</span>
    </a>
  );

}

export default NavItem;
