import React, { Component } from "react"

export default class EventForm extends Component {
  state = {
    eventName: "",
    eventDate: "",
    eventTime: "",
    eventLocation
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  render() {
    return (
      <React.Fragment>
        <form className="eventForm">
          <div className="form-group">
            <label htmlFor="eventName">Event Name</label>
            <input type="text" required
                   className="form-control"
                   onChange={this.handleFieldChange}
                   id="eventName"
                   placeholder="Event Name" />
          </div>
          <div className="form-group">
            <label htmlFor="eventDate">Event Date</label>
            <input type="text" required
                   className="form-control"
                   onChange={this.handleFieldChange}
                   id="eventDate"
                   placeholder="Event Date" />
          </div>
          <div className="form-group">
            <label htmlFor="eventTime">Event Time</label>
            <input type="text" required
                   className="form-control"
                   onChange={this.handleFieldChange}
                   id="eventTime"
                   placeholder="Event Time" />
          </div>
          <div className="form-group">
            <label htmlFor="eventLocation">Event Location</label>
            <input type="text" required
                   className="form-control"
                   onChange={this.handleFieldChange}
                   id="eventLocation"
                   placeholder="Event Location" />
          </div>
        </form>
      </React.Fragment>
    )
  }


}