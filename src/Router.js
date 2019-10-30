import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Societe from "./screens/Societe";
import Accueil from "./screens/Accueil";
import Header from "./components/Header";
import NotFound from "./screens/NotFound";
import WorkInProgress from "./components/WorkInProgress";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const [slideVisible, setSlideVisible] = React.useState(true);
  window.scrollTo(0,0);
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
      <Footer/>
    </>
  );
}

export default App;
