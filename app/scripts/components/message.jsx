var React = require('react');
var $ = require('jquery');

var Header = require('./layouts/template.jsx').Header;

var token = localStorage.getItem('token');

$.ajaxSetup({
  beforeSend: function(xhr){
    xhr.setRequestHeader("X-Parse-Application-Id", "dalaran");
    xhr.setRequestHeader("X-Parse-REST-API-Key", "stormwind");
    xhr.setRequestHeader("X-Parse-Session-Token", token);
  }
});

var MessageList = React.createClass({
  getInitialState: function(){
    return {
      message: ''
    };
  },
  componentWillMount: function(){
    var self = this;
    $.ajax('https://grabow.herokuapp.com/classes/Message').then(displayData);
    function displayData(data){
      self.setState({message: data});
    }
  },
  render: function(){
    var messages = this.state.message.results;
    console.log(messages);
    // var messageList = messages.map(function(data){
    //   return (
    //     <tr key={data.get('id')}>
    //       <th>{data.get('username')}</th>
    //       <td>{data.get('message')}</td>
    //     </tr>
    //   )
    // })
    return (
      <table className="table">
        <tbody>

        </tbody>
      </table>
    );
  }
});

var MessageForm = React.createClass({
  getInitialState: function(){
    return {
      message: ''
    };
  },
  handleMessage: function(e){
    var message = e.target.value;
    this.setState({message: message});
  },
  handleMessagePost: function(e){
    e.preventDefault();
    var messageData = {
      username: localStorage.getItem('username'),
      message: this.state.message
    };
    this.props.handleMessagePost(messageData)
    this.setState({message: ''});
  },
  render: function(){
    return (
      <form onSubmit={this.handleMessagePost} className="form-horizontal well">
        <div className="form-group">
          <label htmlFor="messageInput" className="control-label">Message</label>
          <div>
            <input onChange={this.handleMessage} value={this.state.message} type="text" className="form-control" id="messageInput" placeholder="Your message here" />
          </div>
        </div>
        <div className="form-group">
          <div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </div>
      </form>
    );
  }
});

var MessageContainer = React.createClass({
  handleMessagePost: function(messageData){
    //console.log(messageData);
    var data = {
      'username': messageData.username,
      'message': messageData.message
    };
    $.post('https://grabow.herokuapp.com/classes/Message', data).then(function(response){
      //console.log(response);
    });
  },
  render: function(){
    return (
      <Header>
        <MessageList />
        <MessageForm handleMessagePost={this.handleMessagePost}/>
      </Header>
    );
  }
});

module.exports = {
  MessageContainer: MessageContainer
};
