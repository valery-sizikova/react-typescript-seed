import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import DependecyInjectionSetup from './di-setup';
import { Routes } from 'src/routes';

import './styles.css';

DependecyInjectionSetup.setup();

ReactDOM.render(
  <Router>
    {Routes.getRoutes()}
  </Router>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
