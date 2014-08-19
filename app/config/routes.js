/** @jsx React.DOM */
var Router = require('react-router');
var Routes = Router.Routes
var Route = Router.Route;

module.exports = (
  <Routes location="history">
    <Route handler={require('../components/app')}>
      <Route name="index" path="/" handler={require('../components/index')} />
      <Route name="about" path="/about" handler={require('../components/about')} />
    </Route>
  </Routes>
);

