import React, { Component } from 'react'
import Toolbar from './Inbox/Toolbar'
import MessageList from './Inbox/MessageList'



class Inbox extends Component{
    constructor ({mail, labelArr}) {
        super()
        this.state = { mail , labelArr }
        this.toolbarFun = {
            markRead: this.markRead.bind(this),
            markUnread: this.markUnread.bind(this),
            markAllChecked: this.markAllChecked.bind(this),
            markAllUnchecked: this.markAllUnchecked.bind(this),
            deleteMessages: this.deleteMessages.bind(this),
            allSelected: this.allSelected.bind(this),
            someSelected: this.someSelected.bind(this),
            noneSelected: this.noneSelected.bind(this),
            selectedIds: this.selectedIds.bind(this),
            countUnread: this.countUnread.bind(this),
            applyLabel: this.applyLabel.bind(this),
            removeLabel: this.removeLabel.bind(this)
        }
        this.messageListFun = {
            toggleStarred: this.toggleStarred.bind(this),
            toggleChecked: this.toggleChecked.bind(this),
        }
    }

    //toolbarFun

    countUnread () {
        return this.state.mail.filter(message => !message.read).length
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
            let mail = prev.mail.map(message => {
                return {...message, selected: true}
            })
            return {...prev, mail}
        })
    }

    markAllUnchecked () {
        this.setState(prev => {
            let mail = prev.mail.map(message => {
                return {...message, selected: false}
            })
            return {...prev, mail}
        })
    }

    applyLabel (label) {
        this.setState(prev => {
            let selected = this.selectedIds(prev)
            selected.forEach(id => {
                for (let i = 0; i < prev.mail.length; i++) {
                    if (prev.mail[i].id === id) {
                        if (!prev.mail[i].labels.includes(label)) prev.mail[i].labels.push(label)
                        prev.mail[i].labels.sort()
                        break
                    }
                }
            })
            return prev
        })
    }

    removeLabel (label) {
        this.setState(prev => {
            let selected = this.selectedIds(prev)
            selected.forEach(id => {
                for (let i = 0; i < prev.mail.length; i++) {
                    if (prev.mail[i].id === id) {
                        let index = prev.mail[i].labels.indexOf(label)
                        if (~index) prev.mail[i].labels.splice(index, 1)
                        prev.mail[i].labels.sort()
                        break
                    }
                }
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

    toggleStarred (messageId) {
        this.setState(prev => {
            let mail = prev.mail.map(message => message.id === messageId ? {...message, starred: !message.starred} : message)
            return {...prev, mail}
        })
    }

    toggleChecked (messageId) {
        this.setState(prev => {
            let mail = prev.mail.map(message => message.id === messageId ? {...message, selected: !message.selected} : message)
            return {...prev, mail}
        })
    }


    render () {
        return (
            <div className = "container-fluid">
                <Toolbar mail = {this.state.mail} toolbarFun = {this.toolbarFun} labelArr = {this.state.labelArr} />
                <MessageList mail = {this.state.mail} messageListFun = {this.messageListFun} labelArr = {this.state.labelArr} />
            </div>
        )
    }
}

export default Inbox