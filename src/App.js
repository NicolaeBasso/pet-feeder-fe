import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import petContainer from './containers/petContainer'
import petFormContainer from './containers/petFormContainer'
import PetFeedingsShowContainer from './containers/PetFeedingsShowContainer'
import NewFeedingContainer from './containers/NewFeedingContainer'

import OwnersContainer from './containers/OwnersContainer'
import OwnersFormContainer from './containers/OwnersFormContainer'

import NavBar from './components/NavBar';

import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

import ProtectedRoute from './components/ProtectedRoute'
import withAuth from './components/auth/withAuth'



function App() {

  return (
    <div className="App">

     <Router>
       <NavBar />

       <Routes>
          <Route 
            exact path="/">
             <petContainer />
          </Route>
          <Route 
            exact path="/pet/new" 
            render={(routerProps) => <petFormContainer 
            anotherProp={"additional props like this"} {...routerProps}/>} />
          <Route 
            exact path="/pet/:pet_id/plan" 
            render={(routerProps) => <NewFeedingContainer 
            someOwnerProp={"how do I get this?"} {...routerProps}/>} />
          <Route 
            exact path="/users/"> 
              <OwnersContainer />
          </Route>
          <Route 
            exact path="/pet/:pet_id" 
            render={(routerProps) => <PetFeedingsShowContainer {...routerProps} />} /> 
          <Route 
            exact path="/user/new" 
            render={(routerProps) => <OwnersFormContainer {...routerProps}/>} />
          <Route 
            exact path="user/register" component={Signup} />
          <Route 
            exact path="user/login" component={Login} />
          <Route 
            exact path="/protected_route" component={withAuth(ProtectedRoute)} />
          <Route exact path="user/devices" component={withAuth()}/>
          <Route exact path="device/metadata" component={withAuth()}/>
          <Route exact path="user/metadata" component={withAuth()}/>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
