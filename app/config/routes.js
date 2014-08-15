/** @jsx React.DOM */
var Router = require('react-router');
var Routes = Router.Routes
var Route = Router.Route;

module.exports = (
  <Routes location="history">
    <Route handler={require('../components/app')}>
      <Route name="foo" handler={require('../components/foo')} />
      <Route name="bar" path="/what/evz" handler={require('../components/bar')} />
      <Route name="index" path="/" handler={require('../components/index')} />
    </Route>
  </Routes>
);

