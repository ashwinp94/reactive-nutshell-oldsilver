import { Route} from "react-router-dom";
import React, { Component } from "react";
import NewsManager from '../modules/NewsManager'
import NewsList from './news/NewsList'

export default class ApplicationViews extends Component {

state = {
  newsitems: []
}
  componentDidMount() {

    NewsManager.getAll().then(allNews => {
      this.setState({
        news: allNews
      });
    });
  }




  render() {
    return (
      <React.Fragment>
        <Route path="/" render={(props) => {
            return <NewsList newsitems={this.state.newsitems} />
          }}
          />
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
