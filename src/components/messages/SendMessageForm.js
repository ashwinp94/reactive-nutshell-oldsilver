import React, { Component } from "react";


export default class SendMessageForm extends Component {
  // Set initial state
  state = {
    messages: "",
    timeStamp: "",
    userId: ""
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
    if (this.state.message === "") {
      window.alert("Please select a caretaker");
    } else {
      const messages = {
        message: this.state.messages,
        timeStamp: this.state.timeStamp,
        // userId: this.props.userId.find(
        //   employee => employee.name === this.state.employee
        // ).id
      };

      // Create the animal and redirect user to animal list
      this.props
        .addMessage(messages)
        .then(() => this.props.history.push("/messages"));
    }
  };

  render() {
    return (
      <React.Fragment>
        <form className="message">
          <div className="form-group">
            <label htmlFor="message">Message</label>
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
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}