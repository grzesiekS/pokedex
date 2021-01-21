import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/global.scss';
import './styles/bootstrap.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import HomePage from './components/views/HomePage';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={HomePage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
