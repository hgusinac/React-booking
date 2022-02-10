import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import Container from "./layout/Container";

const App = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/premises">
            <h1>Premises</h1>
          </Route>
        </Switch>
      </Container>
    </React.Fragment>
  );
};
export default App;
