import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AllBooks from './components/AllBooks.jsx'
import SingleBook from './components/SingleBook.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={AllBooks}/>
          <Route exact path="/:id" component={SingleBook}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
