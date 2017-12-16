import React, { Component } from 'react'
import Message from './MessageList/Message'

class MessageList extends Component {
    constructor (props) {
        super(props)
    }

    generateMessageArray () {
        return this.props.mail.map(message => <Message message={message}/>)
    }

    render () {
        return (
            <div className="container-fluid">
                {this.generateMessageArray()}
            </div>
        )
    }
}


export default MessageList