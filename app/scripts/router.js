var React = require('react');
var ReactDom = require('react-dom');
var Backbone = require('backbone');

var Header = require('./components/layouts/template.jsx').Header;
var LoginContainer = require('./components/login.jsx').LoginContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function(){
    ReactDom.render(
      React.createElement(LoginContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
