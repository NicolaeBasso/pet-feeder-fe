import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PetsContainer from './containers/PetsContainer';
import PetFeedingsShowContainer from './containers/PetFeedingsShowContainer';
import NewFeedingContainer from './containers/NewFeedingContainer';

import OwnersContainer from './containers/OwnersContainer';
import OwnersFormContainer from './containers/OwnersFormContainer';

import NavBar from './components/NavBar';

import Signup from './components/auth/Signup';
import Login from './components/auth/Login';

import ProtectedRoute from './components/ProtectedRoute';
import withAuth from './components/auth/withAuth';
import PetsFormContainer from './containers/PetsFormContainer';
import { Box } from '@mui/system';
import { Container } from '@mui/material';

function App() {

  return (
    <div className="App">
      <Router>
        <Container maxWidth="large">
          <NavBar />
          <Box textAlign="center" mt={5}>
            <Routes>
              <Route path="/" exact element={<PetsContainer />} />

              {/* </Route> */}
              <Route
                exact path="/pet/new"
                element={(routerProps) => <PetsFormContainer
                  anotherProp={"additional props like this"} {...routerProps} />} />
              <Route
                exact path="/pet/:pet_id/plan"
                element={(routerProps) => <NewFeedingContainer
                  someOwnerProp={"how do I get this?"} {...routerProps} />} />
              <Route
                exact path="/users/" element={<OwnersContainer />} />

              {/* </Route> */}
              <Route
                exact path="/pet/:pet_id"
                element={(routerProps) => <PetFeedingsShowContainer {...routerProps} />} />
              <Route
                exact path="/user/new"
                element={(routerProps) => <OwnersFormContainer {...routerProps} />} />
              <Route
                exact path="user/register" component={Signup} />
              <Route
                exact path="user/login" component={Login} />
              <Route
                exact path="/protected_route" component={withAuth(ProtectedRoute)} />
              <Route exact path="user/devices" component={withAuth()} />
              <Route exact path="device/metadata" component={withAuth()} />
              <Route exact path="user/metadata" component={withAuth()} />
            </Routes>
          </Box>
        </Container>
      </Router>
    </div>
  );
}

export default App;
