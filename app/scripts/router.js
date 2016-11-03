var React = require('react');
var ReactDom = require('react-dom');
var Backbone = require('backbone');

var Header = require('./components/layouts/template.jsx').Header;
var LoginContainer = require('./components/login.jsx').LoginContainer;
var MessageContainer = require('./components/message.jsx').MessageContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'messages/': 'messages'
  },
  index: function(){
    ReactDom.render(
      React.createElement(LoginContainer, {router: this}),
      document.getElementById('app')
    );
  },
  messages: function(){
    ReactDom.render(
      React.createElement(MessageContainer),
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = router;
