import React, { Component } from 'react'
import seed from '../seed.js'
import Toolbar from './Inbox/Toolbar'
import MessageList from './Inbox/MessageList'

let data = [...seed]
let labels = ['dev', 'personal']

class Inbox extends Component{
    constructor (mail) {
        super()
        this.state = { mail , labels }
        const toolbarFun = {
            markRead: this.markRead.bind(this),
            markUnread: this.markUnread.bind(this),
            markAllChecked: this.markAllChecked.bind(this),
            markAllUnchecked: this.markAllUnchecked.bind(this),
            deleteMessages: this.deleteMessages.bind(this),
            allSelected: this.allSelected.bind(this),
            someSelected: this.someSelected.bind(this),
            noneSelected: this.noneSelected.bind(this),
            selectedIds: this.selectedIds.bind(this)
        }
        const messageListFun = {
            toggleStarred: this.toggleStarred.bind(this),
            // markStarred = markStarred.bind(this),
            // markUnstarred = markUnstarred.bind(this),
            toggleChecked: this.toggleChecked.bind(this),
            // markChecked = this.markChecked.bind(this),
            // markUnchecked = this.markUnchecked.bind(this)
        }
    }

    allSelected () {
        return this.state.mail.every(message => message.selected)
    }

    someSelected () {
        return this.state.mail.some(message => message.selected)
    }

    noneSelected () {
        return this.state.mail.every(message => !message.selected)
    }

    selectedIds (state = this.state) {
        return state.mail.reduce((selArr, message) => {
            return (message.selected) ? [...selArr, message.id] : selArr
        }, [])
    }

    //toolbarFun
    markRead () {
        this.setState(prev => {
            let selected = this.selectedIds(prev)
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
            let selected = this.selectedIds(prev)
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
            let selected = this.selectedIds(prev)
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
    // markStarred (messageId) {
    //     this.setState(prev => {
    //         return prev.mail.map(message => message.id === messageId ? {...message, starred: true} : message)
    //     })
    // }

    // markUnstarred (messageId) {
    //     this.setState(prev => {
    //         return prev.mail.map(message => message.id === messageId ? {...message, starred: false} : message)
    //     })
    // }

    //minimum: for loop w/ break to increase performance
    toggleStarred (messageId) {
        this.setState(prev => {
            return prev.mail.map(message => message.id === messageId ? {...message, starred: !message.starred} : message)
        })
    }

    // markChecked (messageId) {
    //     this.setState(prev => {
    //         return prev.mail.map(message => message.id === messageId ? {...message, selected: true} : message)
    //     })
    // }

    // markUnchecked (messageId) {
    //     this.setState(prev => {
    //         return prev.mail.map(message => message.id === messageId ? {...message, selected: false} : message)
    //     })
    // }

    toggleChecked (messageId) {
        this.setState(prev => {
            return prev.mail.map(message => message.id === messageId ? {...message, selected: !message.selected} : message)
        })
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

export default Inbox