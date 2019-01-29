import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Events.css"

export default class EventList extends Component {
  render() {
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
          {/*.map loops thru list of events*/}
          {this.props.events.map(event => (
            <div key={event.id} className="card">
              <div className="card-body">
                <h5 className="card-title">
                  {event.eventName} {event.eventDate}
                  {event.eventTime} {event.eventLocation}
                </h5>

                <Link className="nav-link" to={`/events/${event.id}/edit`}>Edit</Link>
              </div>
            </div>
          ))}
          </section>
      </React.Fragment>
    )
  }
}
//.map access index position of item i'm currently looping thru
//then 0 will be first item
//add additional class for css as needed