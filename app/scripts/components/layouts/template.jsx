var React = require('react');

var Header = React.createClass({
  render: function(){
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">O User</a>
              <p className="navbar-text navbar-right">Signed in as <a href="#" className="navbar-link">{this.props.username}</a></p>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>

    );
  }
});

module.exports = {
  Header: Header
};
