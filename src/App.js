import React from 'react';
import FormikUserRegistrationForm from "./components/Registration"
import './App.css';
import Dashboard from './components/Dashboard';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login'
import PrivateRoute from './utils/PrivateRoute'
import SignUp from './components/SignUp';
import ChoreList from './components/ChoreList';
import ChoreAdder from './components/ChoreAdder';



function App() {
  return (
    <div className="App">

        <Router>
            <Switch>
              <Route exact path = '/Registration'>
                <SignUp/>
              </Route>
              <Route exact path = '/AddChore'>
                <ChoreAdder/>
              </Route>
              <PrivateRoute exact path = '/dashboard' component = {Dashboard} />
              <Route path = '/' component = {Login} />

            </Switch>
        </Router>

        {/* <FormikUserRegistrationForm /> */}
        {/* <Dashboard /> */}
        {/* <SignUp/> */}
        

    </div>
  );
}

export default App;
