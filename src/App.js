import React from 'react';

import Home from './containers/Home';
import { JsonHandlerProvider } from './contexts/JsonHandlerContext';

const App = () => (
  <JsonHandlerProvider>
    <Home />
  </JsonHandlerProvider>
);

export default App;
