import { Route } from "react-router-dom";
import React, { Component } from "react";
import NewsManager from '../modules/NewsManager'
import NewsList from './news/NewsList'
import NewsForm from "./news/NewsForm";

export default class ApplicationViews extends Component {

  state = {
    newsitems: []
  }



  deleteNews = id => {
    return fetch(`http://localhost:5002/newsitems/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .then(() => fetch(`http://localhost:5002/newsitems`))
      .then(response => response.json())
      .then(news =>
        this.setState({
          newsitems: news
        })
      );
  };

  addNews = Newnews =>
  NewsManager.post(Newnews)
      .then(() => NewsManager.getAll())
      .then(news =>
        this.setState({
          newsitems: news
        })
      );

  componentDidMount() {

    NewsManager.getAll().then(allNews => {
      this.setState({
        newsitems: allNews
      });
    });
  }


  render() {
    return (
      <React.Fragment>
        <Route exact path="/news" render={(props) => {
          return <NewsList {...props}  newsitems={this.state.newsitems}
                                        deleteNews={this.deleteNews}/>
        }}/>
         <Route path="/news/new" render={(props) => {
          return <NewsForm {...props}   addNews={this.addNews}/>
                }} />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
    );
  }
}
