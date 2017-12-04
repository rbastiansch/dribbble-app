import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Shots from './components/Shots';
import ViewShot from './components/ViewShot';

const render = (App) => ReactDOM.render(
  <AppContainer>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Shots} />
        <Route path="/shot/:id" component={ViewShot} />
      </Route>
    </Router>
  </AppContainer>, document.getElementById('root')
);

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}