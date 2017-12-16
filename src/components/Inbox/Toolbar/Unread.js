import React, { Component } from 'react'


const Unread = ({numUnread}) => {
    return (
        <p className="pull-right">
            <span className="badge badge">{numUnread}</span>
            unread messages
        </p>
    )
}

export default Unread