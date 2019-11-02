import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
import "react-toastify/dist/ReactToastify.min.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Accueil = React.lazy(() => import("./screens/Accueil"));
const Contact = React.lazy(() => import("./screens/Contact"));
const Societe = React.lazy(() => import("./screens/Societe"));
const NotFound = React.lazy(() => import("./screens/NotFound"));
const WorkInProgress = React.lazy(() => import("./components/WorkInProgress"));

AOS.init({
  duration: 500
});

function App() {
  AOS.refresh();
  const location = useLocation();
  const [slideVisible, setSlideVisible] = React.useState(true);
  const [mountSlide, setMountSlide] = React.useState(true);
  function setVisible(bool) {
    setSlideVisible(bool);
    if (bool === true) {
      setMountSlide(bool);
    } else {
      setTimeout(() => {
        setMountSlide(bool);
      }, 1000);
    }
  }
  React.useEffect(() => {
    setVisible(true);
  }, [location]);
  window.scrollTo(0, 0);
  return (
    <>
      <Header light={slideVisible && location.pathname === "/"} />
      <React.Suspense fallback={<p>loading</p>}>


      <Switch>
        <Route exact path="/">
          <Accueil slideVisible={slideVisible} setVisible={setVisible} mountSlide={mountSlide} />
        </Route>
        <Route path="/services">
          <WorkInProgress />
        </Route>
        <Route path="/products">
          <WorkInProgress />
        </Route>
        <Route path="/contact">
          <div style={{ background: "white", height: "95px" }} />
          <Contact />
        </Route>
        <Route path="/about">
          <Societe />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      </React.Suspense>
      <Footer />
      <ToastContainer autoClose={6000} />
    </>
  );
}

export default App;
