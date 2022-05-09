import './App.css';

function App() {
  return (
    <Router>
      <Container  maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Switch>
            <Route path="/" exact>
              <Typography variant="h2" fontWeight="bold" color='#0096c7'>
                Your Pet Feeder
              </Typography>
              <Home />
            </Route>
            <Route path="/user">
              <Profile />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/metadata">
              <Metadata />
            </Route>
            <Route path="/devices">
              <Devices />
            </Route>
            <Route path="/device">
              <Device />
            </Route>
            <Route path="/device_meta">
              <DeviceMetadata />
            </Route>
            <Route path="/pet">
              <Pet />
            </Route>
            <Route path="/pet_plan">
              <PetPlan />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
