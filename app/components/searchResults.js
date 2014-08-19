/** @jsx React.DOM */

var React = require('react');

zepto = require('zepto-browserify');
$ = zepto.$;

var Result = React.createClass({
  render: function() {
    return (
      <div className='well'>
        <h3>{this.props.result.Name}</h3>
        <span><strong>category: </strong>{this.props.result.Category}</span>
        <br />
        <span><strong>rating: </strong>{this.props.result.Rating}</span>
      </div>
    );
  }
});

var SearchResults = module.exports = React.createClass({
  render: function() {
    var results = $.map(this.props.results, function(item, index){
      console.log(item);
      return(<Result result={item} key={index}/>);
    });
    return (
      <div>
        {results}
      </div>
    );
  }
});
