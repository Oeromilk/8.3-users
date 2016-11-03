var Backbone = require('backbone');

var Messages = Backbone.Model.extend({

});

var MessagesCollection = Backbone.Model.extend({
  model: Messages,
  url: 'https://grabow.herokuapp.com/classes/Message'
});

module.exorts = {
  Messages: Messages,
  MessagesCollection: MessagesCollection
};
