import React, { Component } from "react"

export default class EventForm extends Component {
  state = {
    eventName: "",
    eventDate: "",
    eventTime: "",
    eventLocation: ""
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  saveEvent = evt => {
    evt.preventDefault()
    
    const event = {
      name: this.state.eventName,
      date: this.state.eventDate,
      time: this.state.eventTime,
      location: this.state.eventLocation
    }

    this.props.saveEvent(event).then(() => this.props.history.push("/events"))
  }

  //updateExistingEvent 
  //--componentDidMount



  render() {
    return (
      <React.Fragment>
        <form className="eventForm">
          <div className="form-group">
            <label htmlFor="eventName">Name</label>
            <input type="text" required
                   className="form-control"
                   onChange={this.handleFieldChange}
                   id="eventName"
                   placeholder="Event Name" />
          </div>
          <div className="form-group">
            <label htmlFor="eventDate">Date</label>
            <input type="text" required
                   className="form-control"
                   onChange={this.handleFieldChange}
                   id="eventDate"
                   placeholder="Event Date" />
          </div>
          <div className="form-group">
            <label htmlFor="eventTime">Time</label>
            <input type="text" required
                   className="form-control"
                   onChange={this.handleFieldChange}
                   id="eventTime"
                   placeholder="Event Time" />
          </div>
          <div className="form-group">
            <label htmlFor="eventLocation">Location</label>
            <input type="text" required
                   className="form-control"
                   onChange={this.handleFieldChange}
                   id="eventLocation"
                   placeholder="Event Location" />
          </div>

          <button type="submit" onClick={this.saveStudent} className="btn btn-primary">Save</button>
        </form>
      </React.Fragment>
    )
  }


}