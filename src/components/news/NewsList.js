import React, { Component } from 'react'
import "./News.css"
export default class NewsList extends Component {
    state = {
        currentUserId: 1,
    }
    render() {
        const sortedNewsItems =
            [].concat(this.props.newsitems)
                .sort((a,b) => {return new Date(a.newsDate).getTime() - new Date(b.newsDate).getTime()})
                .reverse()
                .map(newsitem =>
                        <div className="newsCards" key={newsitem.id}>
                        <h3>{newsitem.title}</h3>
                        <p>{newsitem.url}</p>
                        <p>{newsitem.synopsis}</p>
                        <h6>{newsitem.newsDate}</h6>
                        <button type="button"
                                id="deleteButton"
                                onClick = {() => this.props.deleteNews(newsitem.id)}
                                className="btn btn-success">
                            Delete
                        </button>
                        </div>
                )
        return (
            <React.Fragment>
                <div className="newsButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/news/new")}
                            className="btn btn-success">
                        New Article
                    </button>
                </div>
            <section className="newsitems">
            <h1>Your Saved Articles</h1>
            {sortedNewsItems}
            </section>
            </React.Fragment>
        );
    }
}

