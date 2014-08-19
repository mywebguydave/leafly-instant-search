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
        <h2>Cannabis Strain Instant Search</h2>
        <input
         type='search'
         className='input-lg'
         ref='searchField'
         value={this.state.searchText}
         onChange={this.onChangeSearchText}
         >
        </input>

        <SearchResults results={this.state.results} />
      </div>
    );
  }
});

