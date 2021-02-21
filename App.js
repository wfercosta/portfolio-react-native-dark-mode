import React from 'react';

import ThemeManager from './src/themes';
import Home from './src/Home';

const App = () => {
  return (
    <ThemeManager>
      <Home />
    </ThemeManager>
  );
};

export default App;
