import React from 'react'

export default class MessageList extends React.Component {
    render() {
      return (
        <React.Fragment>
        <div className="message-list">                 
          {this.props.messages.map(message => {
            return (
                
             <p key={message.id}>
               <div>
                 {message.userId}
               </div>
               <div>
                 {message.message}
               </div>
             </p>
           )
         })}
       </div>

       </React.Fragment>
      )
    }
  }
