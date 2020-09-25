import React from 'react';
import goTo from '@common/navigate';

/**
 * Navigation item component
 * @param {Object} props Component properties
 * @param {string} props.icon Item icon
 * @param {string} props.label Item label
 * @param {string} props.path Item path
 * @returns {JSX.Element} React component
 */
const NavItem = props => {

  const {
    icon,
    label,
    path,
  } = props;

  /**
   * @type {boolean}
   */
  const active = (path === history.state) ? true : false;

  return (
    <li>
      <a
        className={`nav-item ${(active) ? 'active' : ''}`}
        onClick={() => goTo(path)}
      >
        <i className={`ri-${icon}-line`} title={label} />
      </a>
    </li>
  );

}

export default NavItem;
