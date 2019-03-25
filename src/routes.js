import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './Pages/login';
import Dashboard from './Pages/Dashboard';
import Tarefas from './Pages/Tarefas/tarefas';
import Create from './Pages/Tarefas/create';
import Detalhe from './Pages/Tarefas/detalhe';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/tarefas" component={Tarefas} />
      <Route path="/tarefas-create" component={Create} />
      <Route path="/tarefas-detalhe/:taskid" component={Detalhe} /> 
     </Switch>
  </BrowserRouter>
)

export default Routes;

