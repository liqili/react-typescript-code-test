import './App.scss';
import React from 'react';
import { Switch, Route, Router, NavLink, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { StoreProvider } from './store/default';
import GenerateView from './views/generate';
import SavedView from './views/saved';
const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <StoreProvider>
      <Router history={history}>
        <>
          <nav>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/generate">Generate</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/saved">Save</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">About</NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Redirect exact from='/' to='/generate' />
            <Route path="/generate">
              <GenerateView />
            </Route>
            <Route path="/saved">
              <SavedView />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </>
      </Router>
    </StoreProvider>
  );
}


function About() {
  return <h2>About</h2>;
}

export default App;
