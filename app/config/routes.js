/** @jsx React.DOM */
var Route = require('react-nested-router').Route;

module.exports = (
  <Route location="history" handler={require('../components/app')}>
    <Route name="foo" handler={require('../components/foo')} />
    <Route name="bar" path="/what/evz" handler={require('../components/bar')} />
    <Route name="index" path="/" handler={require('../components/index')} />
  </Route>
);

