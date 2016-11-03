var React = require('react');
var $ = require('jquery');

var Header = require('./layouts/template.jsx').Header;

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", "dalaran");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "stormwind");
  }
});

var SignUpForm = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },
  handleUsername: function(e){
    var username = e.target.value;
    this.setState({username: username});
  },
  handlePassword: function(e){
    var password = e.target.value;
    this.setState({password: password});
  },
  handleSignUp: function(e){
    e.preventDefault();
    var signUpInformation = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.handleSignUp(signUpInformation);
    this.setState({username:'', password: ''});
  },
  render: function(){
    return (
      <div className="col-md-6">
        <h2>Sign Up...</h2>
        <form onSubmit={this.handleSignUp} id="test" className="well">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input onChange={this.handleUsername} value={this.state.username} type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input onChange={this.handlePassword} value={this.state.password} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    );
  }
});

var LoginForm = React.createClass({
  getInitialState: function(){
    return {
      username: '',
      password: ''
    };
  },
  handleUsername: function(e){
    var username = e.target.value;
    this.setState({username: username});
  },
  handlePassword: function(e){
    var password = e.target.value;
    this.setState({password: password});
  },
  handleLogIn: function(e){
    e.preventDefault();
    var loginInformation = {
      username: this.state.username,
      password: this.state.password
    };
    this.props.handleLogIn(loginInformation);
    this.setState({username:'', password: ''});
  },
  render: function(){
    return (
      <div className="col-md-6">
        <h2>Log In</h2>
        <form onSubmit={this.handleLogIn} id="test1" className="well">
          <div className="form-group">
            <label htmlFor="exampleInputEmail2">Email address</label>
            <input onChange={this.handleUsername} value={this.state.username} type="email" className="form-control" id="exampleInputEmail2" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Password</label>
            <input onChange={this.handlePassword} value={this.state.password} type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
});

var LoginContainer = React.createClass({
  getInitialState: function(){
    return {
      username: ''
    };
  },
  handleLogIn: function(loginInformation){
    this.setState({username: loginInformation.username});
    var username = loginInformation.username;
    var password = loginInformation.password;
    var self = this;
    $.get('https://grabow.herokuapp.com/login?username=' + username + '&password=' + password).then(function(response){
        console.log(response.username);
        console.log(response.sessionToken);
        localStorage.setItem('username', response.username);
        localStorage.setItem('token', response.sessionToken);
        if (response.sessionToken) {
          self.props.router.navigate('messages/', {trigger: true});
        };
      });
  },
  handleSignUp: function(signUpInformation){
    var data = {
      'username': signUpInformation.username,
      'password': signUpInformation.password
    };
    $.post('https://grabow.herokuapp.com/users', data).then(function(response){
      console.log(response);
    });
  },
  render: function(){
    return (
      <Header>
        <LoginForm router={this.props.router} handleLogIn={this.handleLogIn}/>
        <SignUpForm handleSignUp={this.handleSignUp}/>
      </Header>
    );
  }
});

module.exports = {
  LoginContainer: LoginContainer
};
