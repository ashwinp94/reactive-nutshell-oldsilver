import React, { Component } from "react"


export default class NewsForm extends Component {
    // Set initial state

    state = {
      username: "",
      password: "",
      id: "",

    }

    // this.constructNewAnimal = this.constructNewAnimal.bind(this)


    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewUser = evt => {
        evt.preventDefault()
            const User = {
                id: this.state.id,
                username: this.state.username,
                password: this.state.password,

            };

            // Create the animal and redirect user to animal list
            this.props.addUser(User)
            .then(() => this.props.history.push("/news"));
        }

    render() {
        return (
            <React.Fragment>
                <form className="LoginForm">
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="username"
                               placeholder="username" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="password"
                               placeholder="Password" />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select
                        defaultValue=""
                        name="employee"
                        id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div> */}
                    <button type="submit" onClick={this.constructNewUser} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}