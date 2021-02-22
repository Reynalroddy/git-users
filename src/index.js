import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context/context'
import * as serviceWorker from './serviceWorker';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

//domain
//dev-6l4f173m.us.auth0.com

//id
// c1SMWhF4OAZ8BYrSZ3QGCUZps8yr1ISa
ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider 
     domain="dev-vnjtupad.us.auth0.com"
    clientId="kK4Ew8ZG6IvknLwDAEXOz3D3ywBTvl1T"
    redirectUri={window.location.origin}
     cacheLocation='localstorage'>
      
 <AppProvider> 
      <App />
    </AppProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
