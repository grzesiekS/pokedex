import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import './styles/global.scss';
import './styles/bootstrap.scss';

import MainLayout from './components/layout/MainLayout/MainLayout';
import PokemonList from './components/features/PokemonList/PokemonList';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path={'/'} component={PokemonList} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
