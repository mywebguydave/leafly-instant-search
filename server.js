var Hapi = require('hapi');

var port = process.env.PORT || 3000;
var server = new Hapi.Server(port, 'localhost', {
  views: {
    engines: {
      jade: require('jade')
    },
    path: "./app/views"
  }
});

server.route([{
  method: 'GET',
  path: '/',
  handler: function(request, reply) {
    reply.view('index');
  }
}]);

server.route({
  path: "/public/{path*}",
  method: "GET",
  handler: {
    directory: {
      path: "./public",
      listing: false,
      index: false
    }
  }
});

server.route({
  method: "GET",
  path: '/{p*}',
  handler: function(request, reply) {
    reply.view('index');
  }
});

server.on('internalError', function (request, err) {
  console.log('Error response (500) sent for request: ' + request.id + ' because: ' + err.message);
});

server.start(function() {
  console.log('magic is happening on localhost:' + port);
});

