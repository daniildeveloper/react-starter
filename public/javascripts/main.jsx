var React = require('react');
var ReactDOM = require('react-dom');
var Greeter = React.createClass({

  //built in function to setup default values
  getDefaultProps: function () {
    return {
      name: 'React',
      message: 'React message'
    }
  },

  getInitialState: function () {
    return {
      name: this.props.name,
      message: this.props.message
    }
  },

  /**
   * works on button is clicked
   *
   */
  handleNewName: function (name) {
    this.setState({
      name: name
    })
  },

  handleNewMessage: function (message) {
    this.setState({
      message: message
    });
  },

  /**
   * render function
   *
   */
  render: function () {
    var name = this.state.name;
    var message = this.state.message;
    return (

      <div>
        <h1> Hellp React </h1>
        <p> {name} </p>
        <p> {message} </p>
      </div>
    );
  },

});

//render element
ReactDOM.render(
  <Greeter name='Daniil' />,
  document.getElementById('app')
)




