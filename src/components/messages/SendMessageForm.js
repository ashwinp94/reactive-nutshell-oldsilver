import React, { Component } from "react";


export default class SendMessageForm extends Component {
  // Set initial state
  state = {
    message: "",
    timeStamp: "",
    userId: 1
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    console.log(evt.target.id, evt.target.value);
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
  constructNewMessage = evt => {
    evt.preventDefault();
      const messages = {
        message: this.state.message,
        timeStamp: this.state.timeStamp,
        userId: 1
      };

      // Create the animal and redirect user to animal list
      this.props
        .addMessage(messages)
        .then(() => this.props.history.push("/messages"));
    
  };

  render() {
    return (
      <React.Fragment>
        <form className="message">
          <div className="form-group">
            <label htmlFor="message"></label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="message"
              placeholder="Message"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewMessage}
            className="btn btn-primary"
          >
            Send
          </button>
        </form>
      </React.Fragment>
    );
  }
}