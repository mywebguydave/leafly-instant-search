zepto = require('zepto-browserify');
$ = zepto.$;

config = require('../config/config');

module.exports = {
  init: function(updateResultsCallback) {
    this.updateResults = updateResultsCallback;
  },
  getOptions: function(searchText) {
    return({
      url: 'http://data.leafly.com/strains',
      type: 'POST',
      headers: {
        'APP_ID': config.app_id,
        'APP_KEY': config.app_key,
      },
      data: this.getBody(searchText),
      success: this.callbackSuccess.bind(this),
      error: function(xhr, type){ console.log('AJAX error'); },

    });
  },

  callbackSuccess: function (response) {
    console.log(response);
    this.updateResults(response.Strains);
  },

  search: function(searchText) {
    $.ajax(
      this.getOptions(searchText)
    );
  },

  getBody: function(searchText) {
    return(
      JSON.stringify({
        "page":0,
        "take":10,
        "sort":"rating",
        "search":searchText,
      })
    );
  }
};

