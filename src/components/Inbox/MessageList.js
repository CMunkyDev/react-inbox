import React, { Component } from 'react'
import Message from './MessageList/Message'

class MessageList extends Component {
    constructor (props) {
        super(props)
        console.log(this.props)

    }

    generateMessageArray = () => {
        return this.props.mail.map(message => <Message key = {message.id} message = {message} messageListFun = {this.props.messageListFun} />)
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