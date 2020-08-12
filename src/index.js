import React from 'react';
import ReactDOM from 'react-dom';
import PhoneApp from './PhoneApp';
import * as serviceWorker from './serviceWorker';
import Count from './Count';
// 최초의 React App
ReactDOM.render(
  <React.StrictMode>
    <PhoneApp/>
    {/* <Count /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
