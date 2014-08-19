/** @jsx React.DOM */

var leaflyApi = require('../lib/leaflyApi');
var React = require('react');
var SearchResults = require('./searchResults');

var Index = module.exports = React.createClass({
  getInitialState: function() {
    return({
      searchText: '',
      results: [],
    });
  },

  updateResults: function(results) {
    this.setState({
      results: results
    });
  },

  onChangeSearchText: function() {
    var text = this.refs.searchField.getDOMNode().value;
    this.setState({
      searchText: text
    });
    if(text.length > 3){
      console.log('triggering search');
      leaflyApi.init(this.updateResults);
      leaflyApi.search(text);
    }
  },

  render: function() {
    return (
      <div>
        <input
         type='search'
         className='input-lg'
         ref='searchField'
         value={this.state.searchText}
         onChange={this.onChangeSearchText}
         >
        </input>
        <br />
        <br />

        <SearchResults results={this.state.results} />

        <a href="http://www.leafly.com">
          <img src='/public/images/pbl-green.png' />
        </a>
      </div>
    );
  }
});

