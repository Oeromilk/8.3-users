var Backbone = require('backbone');

var Users = Backbone.Model.extend({

});

var UsersCollection = Backbone.Model.extend({
  model: Users,
  url: 'https://grabow.herokuapp.com/users'
});

module.exorts = {
  Users: Users,
  UsersCollection: UsersCollection
};
