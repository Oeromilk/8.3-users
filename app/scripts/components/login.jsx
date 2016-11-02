var React = require('react');

var Header = require('./layouts/template.jsx').Header;

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
  handleSignUp: function(e, signUpInformation){
    e.preventDefault();
    signUpInformation = {
      username: this.state.username,
      password: this.state.password
    };
    console.log(signUpInformation);
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
    console.log(loginInformation);
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
    console.log(loginInformation);
    this.setState({username: loginInformation.username});
  },
  render: function(){
    return (
      <Header username={this.state.username}>
        <LoginForm handleLogIn={this.handleLogIn}/>
        <SignUpForm />
      </Header>
    );
  }
});

module.exports = {
  LoginContainer: LoginContainer
};
