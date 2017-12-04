import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, browserHistory } from 'react-router';

import routes from './routes';

const router = (routes) => {
  return (
    <Router history={browserHistory}>
      { routes() }
    </Router>
  )
}

const render = routes => ReactDOM.render(
  <AppContainer>
    { router(routes) }
  </AppContainer>, document.getElementById('root')
);

render(routes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default;
    render(NextApp);
  });
}