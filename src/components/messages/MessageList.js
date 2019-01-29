import React from 'react'

export default class MessageList extends React.Component {
    render() {
      return (
        <ul className="messages">                 
          {this.props.messages.map(message => {
            return (
             <li key={message.id}>
               <div>
                 {message.userId}
               </div>
               <div>
                 {message.message}
               </div>
             </li>
           )
         })}
       </ul>
      )
    }
  }
