import React, { Component } from "react"


export default class Login extends Component {

    // Set initial state
    state = {
      username: "",
      password: "",
      id: "",

  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
  }

  // Simplistic handler for login submit
  handleLogin = (e) => {
      e.preventDefault()

      /*
          For now, just store the username and password that
          the customer enters into local storage.
      */
      sessionStorage.setItem(
          "credentials",
          JSON.stringify({
              username: this.state.username,
              password: this.state.password,

          })
      )
      sessionStorage.setItem(
        "userId",
        JSON.stringify({
            id: this.state.id
        })
    )
  }

  render() {
      return (
          <form onSubmit={this.handleLogin}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <label htmlFor="inputUsername">
                  Username
              </label>
              <input onChange={this.handleFieldChange} type="text"
                     id="username"
                     placeholder="Username"
                     required="" autoFocus="" />
              <label htmlFor="inputPassword">
                  Password
              </label>
              <input onChange={this.handleFieldChange} type="password"
                     id="password"
                     placeholder="Password"
                     required="" />
              <button type="submit">
                  Sign in
              </button>
              <button type="button"
                            onClick={()=> this.props.history.push("/login/new")}
                            className="btn btn-success">
                        New Article
                    </button>
          </form>
      )
  }
}