import React from 'react'
import { Link } from "react-router-dom";
import "./Message.css"

export default class MessageList extends React.Component {


    // Set scrollbar to bottom
    componentDidMount() {
        this.scrollToBottom();
      }
    componentDidUpdate() {
        this.scrollToBottom();
      }
    scrollToBottom() {
        const chatBox  = this.refs.chatBox;
        console.log(chatBox)
        if (chatBox) {
            // chatBox.scrollTo(0, 250)
            // chatBox.scrollTop = chatBox.scrollHeight - chatBox.clientHeight;
            console.log(chatBox.scrollHeight);
            console.log(chatBox.clientHeight)
            chatBox.scrollTop = chatBox.scrollHeight - chatBox.clientHeight;
        }
    }

    // userConditional= (userId) => {
    //     if (this.props.message.userId === 1) {
    //         let style = "current_user";
    //         return style;
    //     }
    //     else {
    //         let style = "other_user"
    //         return style;
    //     }
    // }


    render() {
        return (
            <React.Fragment>
                <div className="scroll" ref={`chatBox`}>
                    {this.props.messages.map(message => {
                        return (

                            <p key={message.id}>
                                <p>{message.message}</p>
                                
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
