import React, { Component } from 'react'


export default class NewsList extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="newsitems">
            <h1>Your Saved Articles</h1>
            {
                this.props.newsitems.map(newsitem =>
                    <div key={newsitem.id}>
                    <h3>{newsitem.title}</h3>
                    <h4>{newsitem.url}</h4>
                    <h5>{newsitem.synopsis}</h5>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        );
    }
}