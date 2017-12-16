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
        return mail.reduce((selArr, message) => {
            return (message.selected) ? [...selArr, message.id] : selArr
        }, [])
    }

    //toolbarFun
    markRead () {
        this.setState(prev => {
            let selected = Inbox.selectedIds(prev)
            selected.forEach(id => {
                for (let i = 0; i < prev.mail.length; i++) {
                    if (prev.mail[i].id === id) {
                        prev.mail[i].read = true
                        break
                    }
                }
            })
            return prev
        })
    }

    markUnread () {
        this.setState(prev => {
            let selected = Inbox.selectedIds(prev)
            selected.forEach(id => {
                for (let i = 0; i < prev.mail.length; i++) {
                    if (prev.mail[i].id === id) {
                        prev.mail[i].read = false;
                        break
                    }
                }
            })
            return prev
        })
    }

    markAllChecked () {
        this.setState(prev => {
            prev.forEach(message => {
                message.selected = true
            })
            return prev
        })
    }

    markAllUnchecked () {
        this.setState(prev => {
            prev.forEach(message => {
                message.selected = false
            })
            return prev
        })
    }

    deleteMessages () {
        this.setState(prev => {
            let selected = Inbox.selectedIds(prev)
            selected.forEach(id => {
                for (let i = 0; i < prev.mail.length; i++) {
                    if (prev.mail[i].id === id) {
                        prev.mail.splice(i, 1)
                        break
                    }
                }
            })
            return prev
        })
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