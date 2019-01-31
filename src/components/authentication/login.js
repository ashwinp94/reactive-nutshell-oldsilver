import React, { Component } from "react"


export default class Login extends Component {

    // Set initial state
    state = {
      username: "",
      password: "",

  }


  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
  }

  // Simplistic handler for login submit
  onLogin = (evt) => {
    evt.preventDefault();
    this.props.verifyUser(this.state.username, this.state.password)
            if(this.props.users.length < 1) {
                alert("We can't seem to find you! Try registering below")
            } else {
                // if(this.props.users.length < 1) {
                this.props.users.forEach(user => {
                    let loggedIn= false;
                    if (this.state.username === user.username && this.state.password === user.password) {
                            loggedIn= true;
                        }
                    if (loggedIn === true){
                        sessionStorage.setItem("user", user.id);
                        this.props.history.push("/news");
                    }
                })
            }
        }

  render() {
      return (
          <form onSubmit={this.onLogin}>
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
                        Register
                    </button>
          </form>
      )
  }
}