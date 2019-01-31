import React, { Component } from 'react'
import "./News.css"
export default class NewsList extends Component {
    state = {
        currentUserId: 1,
    }
    render() {
        const sortedNewsItems =
            [].concat(this.props.newsitems)
                .sort((a,b) => {return new Date(b.newsDate).getTime() - new Date(a.newsDate).getTime()})
                .reverse()
                .map(newsitem =>
                        <div className="newsCards" key={newsitem.id}>
                            <h3 className="title">{newsitem.title}</h3>
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
            <h1 className="heading">Your Saved Articles</h1>
            <article className="cardHolder">
                {sortedNewsItems}
            </article>
            
            </section>
            </React.Fragment>
        );
    }
}

