import React, { Component } from "react"
import NewsManager from "../../modules/NewsManager"

export default class EditNews extends Component {

    state = {
        userId: sessionStorage.getItem("user"),
        url: "",
        title: "",
        synopsis: "",
        newsDate: ""
    }

    handleFieldChange = evt => {
      const stateToChange = {}
      stateToChange[evt.target.id] = evt.target.value
      this.setState(stateToChange)
    }


    updateExistingNews = evt => {
      evt.preventDefault()


      const existingNews = {
        userId: this.state.userId,
        url: this.state.url,
        title: this.state.title,
        synopsis: this.state.synopsis,
        newsDate: this.state.newsDate
      }

      this.props.updateNews(this.props.match.params.newsId, existingNews)
      .then(() => this.props.history.push("/news"))
    }

    componentDidMount() {
      NewsManager.get(this.props.match.params.newsId)
      .then(news => {
        this.setState({
            userId: this.state.userId,
            url: news.url,
            title: news.title,
            synopsis: news.synopsis,
            newsDate: news.newsDate,
            id: news.id,
        })
      })
    }

    render() {
      return (
        <React.Fragment>
          <form className="newss">
            <div className="news">
              <label htmlFor="title">Title: </label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="title"
                    value={this.state.title} />
            </div>
            <div className="news">
              <label htmlFor="url">Url: </label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="url"
                    value={this.state.url} />
            </div>
            <div className="news">
              <label htmlFor="synopsis">Synopsis: </label>
              <input type="text" required
                    className="form-control"
                    onChange={this.handleFieldChange}
                    id="message"
                    value={this.state.synopsis} />
            </div>
            <button type="submit" onClick={this.updateExistingNews} className="btn btn-primary">Update</button>
          </form>
        </React.Fragment>
      )
    }
}