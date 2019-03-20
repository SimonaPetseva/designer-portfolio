import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';

// Css
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
        </div>
    </Router>
);

ReactDOM.render(
    routing, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
