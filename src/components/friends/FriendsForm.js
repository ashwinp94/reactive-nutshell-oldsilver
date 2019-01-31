import React, { Component } from "react"

export default class FriendsForm extends Component {
  state = {
    "id": 1,
    "userId": 1,
    "otherFriendId": 2
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

//   saveEvent = evt => {
//     evt.preventDefault()
    
//     const event = {
//       eventName: this.state.eventName,
//       eventDate: this.state.eventDate,
//       eventTime: this.state.eventTime,
//       eventLocation: this.state.eventLocation,
//       userId: this.state.userId
//     }

//     this.props.addEvent(event).then(() => this.props.history.push("/events"))
//   }



  render() {
    return (
      <React.Fragment>
        <form className="friendForm">
          <div className="form-group">
            <label htmlFor="friendsName">Friends</label>
            <input type="text" required
                   className="form-control"
                   onChange={this.handleFieldChange}
                   id="friendsName"
                   placeholder="Friends" />
          </div>

          <button type="submit" onClick={this.saveEvent} className="btn btn-primary">Search</button>

        </form>
      </React.Fragment>
    )
  }


}