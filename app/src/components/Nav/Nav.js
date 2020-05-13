// Import modules
import React from 'react';

// Import Nav view
import NavView from './NavView';

const Nav = () => {

  const items = [
    {
      icon: 'home',
      isActive: false,
      text: 'Home',
    }
  ];

  return <NavView items={items} />;
}

export default Nav;
