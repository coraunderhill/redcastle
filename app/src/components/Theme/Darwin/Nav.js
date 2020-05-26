// Import Node modules
import React from 'react';

// Import navigation module
import { mostPopular } from 'Common/navigate';

/**
 * macOS nav wrapper
 * @param {Object} props Component properties
 * @param {Object} props.children Component children
 * @returns {Object} React component
 */
const Nav = props => {

  const { children } = props;

  return (
    <div className="nav">
      <nav className="nav-group">
        <h5 className="nav-group-title">Favorites</h5>
        {children}
      </nav>
    </div>
  );
}

/**
 * macOS navigation group item
 * @param {Object} props Component properties
 * @param {string|number} props.key Item key
 * @param {string} props.label Item label text
 * @param {string} props.name Item's name
 * @param {string} props.path = Link path
 * @returns {Object} React component
 */
export const NavItem = props => {

  const {
    label,
    name,
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
      <span className={`icon icon-${name}`}></span>
      <span className="item-label">{label}</span>
    </a>
  );

}

export default Nav;
