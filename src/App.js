import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { OidcProvider } from '@axa-fr/react-oidc';
import Routes from './RouteList';

// This configuration use the ServiceWorker mode only
// "access_token" will be provided automaticaly to the urls and domains configured inside "OidcTrustedDomains.js"
const configuration = {
  client_id: 'react_client',
  redirect_uri: window.location.origin + "/authentication/callback",
  silent_redirect_uri: window.location.origin + "/authentication/silent-callback", // Optional activate silent-signin that use cookies between OIDC server and client javascript to restore the session
  scope: 'openid profile offline_access',
  authority: 'https://id.homnics.com',
  service_worker_relative_url:'/OidcServiceWorker.js',
  service_worker_only: false,
};

const App = () => (
  <OidcProvider configuration={configuration} >
    <Router>
      <Routes/>
    </Router>
  </OidcProvider>
);

export default App;