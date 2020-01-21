import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HelloWorld from './components/HelloWorld.js'
import Creatures from './components/Creatures.js'
import SingleCreature from './components/SingleCreature.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route exact path="/" component={HelloWorld}/> */}
          <Route exact path="/" component={Creatures}/>
          <Route exact path="/:creatureId" component={SingleCreature} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
