import React, { Component } from 'react'


export default class NewsList extends Component {
    render() {
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
            {
                this.props.newsitems.map(newsitem =>
                    <div key={newsitem.id}>
                    <h3>{newsitem.title}</h3>
                    <h4>{newsitem.url}</h4>
                    <h5>{newsitem.synopsis}</h5>
                    <button type="button"
                            onClick = {() => this.props.deleteNews(newsitem.id)}
                            className="btn btn-success">
                        Delete
                    </button>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        );
    }
}
