import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <h1>This is "root" page.</h1>
          </Route>
          <Route path="/about">
            <h1>This is "about" page.</h1>
          </Route>
          <Route path="/users">
            <h1>This is "users" page.</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
