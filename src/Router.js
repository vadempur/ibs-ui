import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Societe from "./screens/Societe";
import Accueil from "./screens/Accueil";
import Header from "./components/Header";
import NotFound from "./screens/NotFound";
import WorkInProgress from "./components/WorkInProgress";

function App() {
  const location = useLocation();
  const [slideVisible, setSlideVisible] = React.useState(true);

  return (
    <>
      <Header light={slideVisible && location.pathname === "/"} />
      <Switch>
        <Route exact path="/">
          <Accueil slideVisible={slideVisible} setSlideVisible={setSlideVisible} />
        </Route>
        <Route path="/services">
          <WorkInProgress />
        </Route>
        <Route path="/products">
          <WorkInProgress />
        </Route>
        <Route path="/contact">
          <WorkInProgress />
        </Route>
        <Route path="/about">
          <Societe />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </>
  );
}

export default App;
