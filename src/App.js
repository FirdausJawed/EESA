import React from 'react'
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import Profile from './components/Profile.js';
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route path="/">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

        </Switch>
      </div>
    </Router>
  )
}

export default App

