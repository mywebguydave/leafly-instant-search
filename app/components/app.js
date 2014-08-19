/** @jsx React.DOM */

var React = require('react');
var Link = require('react-router').Link;

var App = module.exports = React.createClass({

  render: function() {
    return (
      <div className="vertical-center">
        <div className="container text-left">
          <div className='row'>
            <div className='col-md-8 col-md-offset-2'>
              <h1>InstaStrain Search</h1>
              <ul>
                <li><Link to="index">Search</Link></li>
                <li><Link to="about">About</Link></li>
              </ul>
              {this.props.activeRouteHandler()}

            </div>
          </div>
        </div>
      </div>
    );
  },

});

