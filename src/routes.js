import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './App';
import Gallery from './components/Gallery';
import ViewShot from './components/ViewShot';

const routes = () => {
  return (
    <Route path="/" component={App} >
      <IndexRoute component={Gallery} />
      <Route path="/shot/:id" component={ViewShot} />
    </Route>
  )
};

export default routes;