import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// MUI
import { Container, Grid } from "@material-ui/core";

//Componenets
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Footer from "./components/Footer/Footer";
import "./App.css";
function App() {
  return (
    <Container className={"top_16"}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "#45aaff" }}>
          <Router>
            <Header />
            <div className="main_content container_shadow">
              <Switch>
                <Route path="/" exact>
                  <Resume />
                </Route>
                <Route path="/portfolio">
                  <Portfolio />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
