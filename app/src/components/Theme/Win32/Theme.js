// Import Node modules
import React from 'react';
import { blue500 } from 'react-uwp/styles/accentColors';
import { getTheme, Theme as UWPTheme } from 'react-uwp/Theme';

// Import React components
import Header from 'Components/Header/Header';
import Nav from 'Components/Nav/Nav';

/**
 * Windows app template
 * @param {Object} props Component properties
 * @param {Object} props.children Child components for rendering
 * @returns {Object} React component
 */
const Theme = props => {

  const { children } = props;

  const themeParams = getTheme({
    themeName: 'Dark',
    accent: blue500,
    useFluentDesign: true,
  });

  return (
    <UWPTheme theme={themeParams}>
      <Header />
      <Nav />
      {children}
    </UWPTheme>
  );
};

export default Theme;
