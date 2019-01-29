// import React, { Component } from "react"

// export default class MessageDetail extends Component {
//     render() {
//         /*
//             Using the route parameter, find the animal that the
//             user clicked on by looking at the `this.props.animals`
//             collection that was passed down from ApplicationViews
//         */
//         const chat = this.props.messages.find(a => a.id === parseInt(this.props.match.params.messageId)) || {}

//         return (
//             <section className="message-detail">
//                 <div key={message.id} className="card">
//                     <div className="card-body">
//                         <h4 className="card-title">
//                             {message.message}
//                         </h4>
//                         <h6 className="card-title">{message.timeStamp}</h6>
//                         <a href="# "
//                             onClick={() => this.props.deleteMessage(message.id)
//                                             .then(() => this.props.history.push("/messages"))}
//                             className="card-link">Delete</a>
//                     </div>
//                 </div>
//             </section>
//         )
//     }