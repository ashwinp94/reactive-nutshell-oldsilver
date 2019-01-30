import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Events.css"

export default class EventList extends Component {
  render() {
    const sortedEventItems = [].concat(this.props.events)
                          .sort((a,b) => {return new Date(a.eventDate) - new Date(b.eventDate)})
                          .map(event =>
                                  <div key={event.id} className="card">
                                    <div className="card-body">
                                      <p>{event.eventName}</p>
                                      <p>{event.eventDate}</p>
                                      <p>{event.eventTime}</p>
                                      <p>{event.eventLocation}</p>
                                      <Link className="nav-link" to={`/events/${event.id}/edit`}>Edit</Link>
                                    </div>
                                  </div>
                          )

    return (
      <React.Fragment>
          <div className="eventBtn">
            <button type="button"
                    className="btn btn-success"
                    onClick={() => {
                      this.props.history.push("/events/new")}
                    }>
                    Add Event
            </button>
          </div>

          <section className="events">
          <h2>Upcoming Events</h2>
            <div className="card-items">{sortedEventItems}</div>
          </section>

      </React.Fragment>
    )
  }
}
