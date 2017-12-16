import React, { Component } from 'react'
import seed from '../seed.js'

let data = [...seed]
let labels = ['dev', 'personal']

class Inbox {
    constructor (mail) {
        this.state = { mail , labels }
        const toolbarFun = {
            markRead = markRead.bind(this),
            markUnread = markRead.bind(this),
            markAllChecked = markAllChecked.bind(this),
            markAllUnchecked = markAllUnchecked.bind(this),
            deleteMessages = deleteMessages.bind(this)
        }
        const messageListFun = {
            markStarred = markStarred.bind(this),
            markUnstarred = markUnstarred.bind(this),
            markChecked = markChecked.bind(this),
            markUnchecked = markUnchecked.bind(this)
        }
    }

    static selectedIds (mail) {
        
    }

    //toolbarFun
    markRead () {
        
    }

    markUnread () {

    }

    markAllChecked () {

    }

    markAllUnchecked () {

    }

    deleteMessages () {
        
    }


    //messageListFun
    markStarred (messageId) {

    }

    markUnstarred (messageId) {

    }

    markChecked (messageId) {

    }

    markUnchecked (messageId) {

    }


    render () {
        return (
            <div className = "container-fluid">
                <Toolbar mail = {mail} toolbarFun = {toolbarFun}/>
                <MessageList mail = {mail} messageListFun = {messageListFun}/>
            </div>
        )
    }
}