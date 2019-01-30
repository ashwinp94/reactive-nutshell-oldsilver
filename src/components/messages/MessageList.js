import React from 'react'
import { Link } from "react-router-dom";
import "./Message.css"

export default class MessageList extends React.Component {
    // function scroll(props) {
    //     let myRef = React.createRef();
    // }
    
    // scrollToBottom = () => {
    //     this.node.scrollIntoView({ behavior: "smooth" });
    //   }
      
    //   componentDidUpdate() {
    //     this.scrollToBottom();
    //   }
      
    render() {
      return (
        <React.Fragment>
        <div className="scroll">                 
          {this.props.messages.map(message => {
            return (
                
             <p key={message.id}>
                 {message.userId}
                 {message.message}
               <Link className="nav-link" to={`/messages/${message.id}/edit`}>Edit</Link>
             </p>
           )
         })}
         <div ref={this.myRef}></div>
       </div>


       </React.Fragment>
      )
    }
  }
