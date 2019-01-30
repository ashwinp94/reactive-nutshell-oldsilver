import React, { Component } from "react"
import MessageManager from "../../modules/MessageManager"

export default class EditMessage extends Component {

    state = {
        "message": "",
        "timeStamp": "",
        "userId": 1,
        "id": 2
    }

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }


    updateExistingMessage = evt => {
      evt.preventDefault()


      const existingMessage = {
        message: this.state.message,
        timeStamp: this.state.timeStamp,
        userId: this.state.userId,
        id: this.state.id
      }

      this.props.updateMessage(this.props.match.params.messageId, existingMessage)
      .then(() => this.props.history.push("/messages"))
    }

    componentDidMount() {
      MessageManager.get(this.props.match.params.messageId)
      .then(message => {
        this.setState({
            message: message.message,
            timeStamp: message.timeStamp,
            userId: message.userId,
            id: message.id
        })
      })
    }

    render() {
      return (
        <React.Fragment>
          <form className="message">
            <div className="message">
              <label htmlFor="MessageName">Message</label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="message"
                    value={this.state.MessageName} />
            </div>
            <button type="submit" onClick={this.updateExistingMessage} className="btn btn-primary">Update</button>
          </form>
        </React.Fragment>
      )
    }
}