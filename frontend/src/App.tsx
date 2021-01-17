import React from 'react';
import { AddUserForm } from './components/AddUserForm';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { HomeForm } from './components/HomeForm';
import { Browse } from './components/Browse';
import ReactHlsPlayer from 'react-hls-player';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <AddUserForm />
        </Route>
        <Route path='/home'>
          <Sidebar />
          <HomeForm />
        </Route>
        <Route path='/browse'>
          <Sidebar />
          <Browse />
        </Route>
        <Route path='/friends'>
          <Sidebar />
          <div className="friends">
            Your Friends
          </div>
        </Route>
        <Route path='/player'>
          <Sidebar />
          <ReactHlsPlayer
            url='http://localhost:3000/stream/music_angela_paulson_dancing_waters_007.m3u8'
            autoplay={false}
            controls={true}
            width="100%"
            height="auto"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
