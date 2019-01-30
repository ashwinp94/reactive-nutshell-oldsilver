import React, { Component } from "react"


export default class NewsForm extends Component {
    // Set initial state

    state = {
        userId: 1,
        url: [],
        title: [],
        synopsis: [],
        newsDate: []
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
    constructNewNews = evt => {
        evt.preventDefault()
            const News = {
                userId: 1,
                url: this.state.url,
                title: this.state.title,
                synopsis: this.state.synopsis,
                newsDate: new Date()
            };

            // Create the animal and redirect user to animal list
            this.props.addNews(News)
            .then(() => this.props.history.push("/news"));
        }

    render() {
        return (
            <React.Fragment>
                <form className="NewsForm">
                    <div className="form-group">
                        <label htmlFor="url">Add Link: </label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="url"
                               placeholder="url link" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">News Title</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="title"
                               placeholder="news title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="synopsis">Synopsis</label>
                        <input type="text" required
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="synopsis"
                               placeholder="synopsis" />
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
                    <button type="submit" onClick={this.constructNewNews} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}