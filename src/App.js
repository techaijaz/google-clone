import React from 'react';
import Home from './pages/Home'
//import SearchPage from './pages/SearchPage'
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>This is Search page</h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
