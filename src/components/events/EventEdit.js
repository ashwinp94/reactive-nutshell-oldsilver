import React, { Component } from "react"
import EventManager from "../../modules/EventManager"

export default class EventEdit extends Component {

    state = {
      eventName: "",
      eventDate: "",
      eventTime: "",
      eventLocation: "",
      userId: 1
    }

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }


    updateExistingEvent = evt => {
      evt.preventDefault()


      const existingEvent = {
        eventName: this.state.eventName,
        eventDate: this.state.eventDate,
        eventTime: this.state.eventTime,
        eventLocation: this.state.eventLocation,
        userId: this.state.userId
      }

      this.props.updateEvent(this.props.match.params.eventId, existingEvent)
      .then(() => this.props.history.push("/events"))
    }

    componentDidMount() {
      EventManager.get(this.props.match.params.eventId)
      .then(event => {
        this.setState({
          eventName: event.eventName,
          eventDate: event.eventDate,
          eventTime: event.eventTime,
          eventLocation: event.eventLocation,
          userId: event.userId
        })
      })
    }

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
                    value={this.state.eventName} />
            </div>
            <div className="form-group">
              <label htmlFor="eventDate">Date</label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="eventDate"
                    value={this.state.eventDate} />
            </div>
            <div className="form-group">
              <label htmlFor="eventTime">Time</label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="eventTime"
                    value={this.state.eventTime} />
            </div>
            <div className="form-group">
              <label htmlFor="eventLocation">Location</label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="eventLocation"
                    value={this.state.eventLocation} />
            </div>

            <button type="submit" onClick={this.updateExistingEvent} className="btn btn-primary">Update</button>
          </form>
        </React.Fragment>
      )
    }
}
