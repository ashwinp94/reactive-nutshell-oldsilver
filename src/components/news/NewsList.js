import React, { Component } from 'react'


export default class NewsList extends Component {
    render() {
        const sortedNewsItems = [].concat(this.props.newsitems)
                            .sort((a,b) => {return new Date(a.newsDate).getTime() - new Date(b.newsDate).getTime()})
                            .reverse()
                            .map(newsitem =>
                                    <div key={newsitem.id}>
                                    <h3>{newsitem.title}</h3>
                                    <h4>{newsitem.url}</h4>
                                    <h5>{newsitem.synopsis}</h5>
                                    <h6>{newsitem.newsDate}</h6>
                                    <button type="button"
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

