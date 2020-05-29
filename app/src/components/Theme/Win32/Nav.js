// Import Node modules
import React from 'react';
import NavigationView from 'react-uwp/NavigationView';
import SplitViewCommand from 'react-uwp/SplitViewCommand';

// Import navigation module
import { mostPopular } from 'Common/navigate';

/**
 * Windows nav wrapper
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
 * Windows navigation content
 * @param {Object} props Component properties
 * @returns {Array} Array of NavItem components
 */
export const NavContent = props => {

  const { items } = props;

  const result = items.map(({label, name, path}) => (
    <NavItem key={name} label={label} name={name} path={path} />
  ));

  return result;

}

/**
 * Windows navigation group item
 * @param {Object} props Component properties
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

  return <SplitViewCommand icon={name} label={label} />;

}

export default Nav;
