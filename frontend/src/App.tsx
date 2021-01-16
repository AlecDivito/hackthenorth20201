import React from 'react';
import styled from 'styled-components';
import { AddUserForm } from './components/AddUserForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <AddUserForm />
        </Route>
        <Route path='/home'>
          <Sidebar />
          <div>
            Home
          </div>
        </Route>
        <Route path='/browse'>
          <Sidebar />
          <div>
            Browse Soundscapes
          </div>
        </Route>
        <Route path='/friends'>
          <Sidebar />
          <div>
            Your Friends
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
