/** @jsx React.DOM */

var React = require('react');

var About = module.exports = React.createClass({
  render: function() {
    return (
      <div>
        <h2>About</h2>
        <p>
          Weekend project by <a href='https://github.com/philipkobernik'>philipkobernik</a> as an exercise to rapidly develop a google-instant-style search interface for cannabis strains.
        </p>
        <p>
          UI powered by bootstrap, zepto, and react.
        </p>
        <p>
          Code can be found <a href='https://github.com/philipkobernik/leafly-instant-search'>on github</a>.
        </p>
      </div>
    );
  }
});

