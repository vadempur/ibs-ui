import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './Router';
import {BrowserRouter as Router} from "react-router-dom"
import * as serviceWorker from './serviceWorker';

import ReactGA from 'react-ga';
import { GOOGLE_ANALYTICS_TRACKING_ID, BASE_URL } from './helpers/constants';
ReactGA.initialize(GOOGLE_ANALYTICS_TRACKING_ID);
ReactGA.pageview(BASE_URL);

ReactDOM.render( <Router><App /></Router> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
