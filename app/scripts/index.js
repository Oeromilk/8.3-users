var $ = require('jquery');
var Backbone = require('backbone');
require('./router');

$(function(){
  Backbone.history.start();
});













var $ = require('jquery');

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", "tiygvl");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "slumber");
  }
});

var url = 'https://tiny-parse-server.herokuapp.com/classes/Aj';
var result = $.ajax(url).then(function(data){
  console.log(data);
});

$('#test').on('submit', function(event){
  event.preventDefault();

  var data = {
    'username': $('#exampleInputEmail1').val(),
    'password': $('#exampleInputPassword1').val()
  };

  $.post('https://tiny-parse-server.herokuapp.com/users', data).then(function(response){
    console.log(response);
  });
});

$('#test1').on('submit', function(e){
  e.preventDefault();

  var username = $('#exampleInputEmail2').val();
  var password = $('#exampleInputPassword2').val();

  //change to ajax to setup success and error message

  $.get('https://tiny-parse-server.herokuapp.com/login?username=' + username + '&password=' + password).then(function(response){
    console.log(response);
  });
});
