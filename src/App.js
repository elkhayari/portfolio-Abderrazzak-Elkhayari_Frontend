import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// MUI
import { Container, Grid } from "@material-ui/core";

//Componenets
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import './App.css'
function App() {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          style={{ backgroundColor: "blue" }}
        >
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          <Header />
          <Router>
            <Switch>
              <Route path="/" exact>
                <Resume />
              </Route>
              <Route path="/portfolio" >
                <Portfolio />
              </Route>
            </Switch>
          </Router>
        
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
