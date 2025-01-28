import React from 'react';
import buildStore from './buildStore';
import App from './components/App';

import { Provider } from 'react-redux';
import { render } from 'react-dom';

const StoRe = buildStore();

render(
   <Provider store={StoRe}>
      <App />
       </Provider>,
  document.getElementById('root'),
);
