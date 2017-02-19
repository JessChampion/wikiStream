import * as React from 'react';
import {Route, IndexRoute} from 'react-router';

import AppFrame from './views/AppFrame';
import NotFoundView from './views/NotFoundView';
import HomeView from './views/HomeView';

let routeMap = (
  <Route path="/" component={AppFrame}>
    <IndexRoute component={HomeView}/>
    <Route path="*" component={NotFoundView}/>
  </Route>
);

export default routeMap;
