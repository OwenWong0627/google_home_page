import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
   return (
      <div className="app">
         <Router>
            <Switch>
               <Route exact path='/' >
                  <Home />
               </Route>
               <Route exact path='/search'>
                  <SearchPage />
               </Route>
            </Switch>
         </Router>
      </div>
   );
}

export default App;
