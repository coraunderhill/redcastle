// Import Node modules
import React from 'react';

// Import theme component getter
import { getThemeComponent } from 'Components/Theme/';

/**
 * App header
 * @returns {Object} React component
 */
const Header = () => {

  const Wrapper = getThemeComponent('Header');

  return (
    <Wrapper>
      <h1 className="title">Redcastle</h1>
    </Wrapper>
  );

};


export default Header;
