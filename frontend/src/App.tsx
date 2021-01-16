import React from 'react';
import styled from 'styled-components';
import { AddUserForm } from './components/AddUserForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <AddUserForm />
        </Route>
        <Route path='/home'>
          <div>
            Home
          </div>
        </Route>
        <Route path='/browse'>
          <div>
            Browse Soundscapes
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
