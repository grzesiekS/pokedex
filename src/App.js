import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/global.scss';
import './styles/bootstrap.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import PokemonList from './components/features/PokemonList/PokemonListContainer';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path={'/'} component={PokemonList} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  </Provider>
);

export default App;
