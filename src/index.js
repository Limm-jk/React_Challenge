import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Count from './Count';
// 최초의 React App
ReactDOM.render(
  <React.StrictMode>
    {/* <App name="Limm_jk"/> */}
    <Count />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
