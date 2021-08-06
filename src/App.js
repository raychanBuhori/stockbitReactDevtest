import React from 'react';
import {Switch, Route, Router} from 'react-router-dom';
import {history} from './history';
import './styles/index.scss';

import Page from './pages';
import DetailPage from './pages/DetailPage/index';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Page} />
        <Route path='/detail' component={DetailPage} />
      </Switch>  
    </Router>
  );
}

export default App;
