Cannabis Instant Search
=================

Uses:

- [React Router](https://github.com/rackt/react-router)
- [Hapi](https://github.com/hapijs/hapi)
- [Webpack](http://webpack.github.io/)
- [Leafly API](https://developer.leafly.com)
- [Zepto](https://github.com/madrobby/zepto)

You will need a config file at app/config/config.js:

```javascript
module.exports = {
  app_id: '<LEAFLY APP_ID',
  app_key: '<LEAFLY APP_KEY>',
};
```

Then you shall be golden:

```sh
$ npm install
$ ./script/dev
# open http://localhost:3000
# or
$ PORT=8000 ./script/dev
```

