import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Societe from "./screens/Societe"
import Accueil from "./screens/Accueil"

function App() {
  

  return (
    <Router>
      {/* <Header setSlideVisible={setSlideVisible} light={slideVisible} /> */}
      <Switch>
        <Route path="/about">
          <Societe/>
        </Route>
        <Route path="/">
          <Accueil/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
