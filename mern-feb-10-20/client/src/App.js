import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllPlayers from './components/AllPlayers.jsx'
import SinglePlayer from './components/SinglePlayer.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={AllPlayers}/>
          <Route exact path="/:id" component={SinglePlayer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
