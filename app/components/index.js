/** @jsx React.DOM */

var React = require('react');

var Index = module.exports = React.createClass({
  getInitialState: function() {
    return({
      searchText: '',
    });
  },

  onChangeSearchText: function() {
    var text = this.refs.searchField.getDOMNode().value;
    this.setState({
      searchText: text
    });
    if(text.length > 3){
      console.log('triggering search');
      //this.triggerSearch();
    }
  },

  render: function() {
    return (
      <div>
        <h2>Cannabis Strain Instant Search</h2>
        <input
         type='search'
         classname='input-lg'
         ref='searchField'
         value={this.state.searchText}
         onChange={this.onChangeSearchText}
         >
        </input>
      </div>
    );
  }
});

