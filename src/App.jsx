import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from 'react-router-dom';

import MainNavigation from './components/Navigation/MainNavigation';

import Home from './pages/Home/Home';
import About from './pages/About/About';
import QnA from './pages/QnA/QnA';
import Auth from './pages/Auth/Auth';
import Thread from './pages/Thread/Thread';

import './App.css';

function App() {
    return (
        <Router>
            <MainNavigation />
            <main>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about" exact>
                        <About />
                    </Route>
                    <Route path="/threads" exact>
                        <QnA />
                    </Route>
                    <Route path="/threads/:threadId" exact>
                        <Thread />
                    </Route>
                    <Route path="/auth" exact>
                        <Auth />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </main>
        </Router>
    );
}

export default App;
