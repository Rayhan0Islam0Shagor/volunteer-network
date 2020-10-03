import React, { createContext, useState } from 'react';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Components/Login/Login';
import NotFound from './Components/NotFound/NotFound';
import Header from './Components/Header/Header';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Register from './Components/Register/Register';
import SocialWork from './Components/SocialWork/SocialWork';
import Donation from './Components/Donation/Donation';
import Blogs from './Components/Blogs/Blogs';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name: '',
    email: '',
    photo: '',
    issueData: '',
    category: ''
  });
  return (
    <div>
      <UserContext.Provider value={{ userInfo: [loggedInUser, setLoggedInUser] }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/donation">
              <Donation />
            </Route>

            <Route path="/events">
              <Home />
            </Route>

            <Route path="/blogs">
              <Blogs />
            </Route>

            <PrivateRoute path="/socialWork">
              <SocialWork />
            </PrivateRoute>

            <PrivateRoute path="/register/:id">
              <Register />
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
