import React, { Component } from 'react'
import Unread from './Toolbar/Unread'
import Button from './Toolbar/Button'
import Dropdown from './Toolbar/Dropdown'


class Toolbar extends Component {
  constructor (props) {
    super(props)
    console.log(this.props)
  }

  unreadButton = () => {
    return <Button innerFunc={() => 'Mark As Unread'} callback={this.props.toolbarFun.markUnread} disabled = {this.props.toolbarFun.noneSelected() ? 'disabled' : ''}/>
  }

  readButton = () => {
    return <Button innerFunc={() => 'Mark As Read'} callback={this.props.toolbarFun.markRead} disabled = {this.props.toolbarFun.noneSelected() ? 'disabled' : ''}/>
  }

  trashButton = () => {
    return <Button innerFunc={() => <i className="fa fa-trash-o"></i>} callback={this.props.toolbarFun.deleteMessages} dsiabled = {this.props.toolbarFun.noneSelected() ? 'disabled' : ''}/>
  }

  checkButtonText = () => {
    if (this.props.toolbarFun.allSelected()) return <i className="fa fa-check-square-o"></i>
    if (this.props.toolbarFun.someSelected()) return <i class="fa fa-minus-square-o"></i>
    if (this.props.toolbarFun.noneSelected()) return <i class="fa fa-square-o"></i>
    return ''
  }

  checkButtonCallback = () => {
    if (this.props.toolbarFun.allSelected()) return this.props.toolbarFun.markAllUnchecked
    return this.props.toolbarFun.markAllChecked
  }

  checkButton = () => {
    return <Button innerFunc = {() => this.checkButtonText()} callback = {this.checkButtonCallback()} />
  }

  applyLabelCallback = (e) => {
    this.props.toolbarFun.applyLabel(e.target.value)
  }

  removeLabelCallback = (e) => {
    this.props.toolbarFun.removeLabel(e.target.value)
  }

  selectedLabels () {
        let selected = this.props.toolbarFun.selectedIds(this.props)
        let usedLabels = {}
        selected.forEach(id => {
            for (let i = 0; i < this.props.mail.length; i++) {
                if (this.props.mail[i].labels.length) {
                    this.props.mail[i].labels.forEach(label => usedLabels[label] = '')
                }
            }
        })
        usedLabels = Object.keys(usedLabels)
        usedLabels.sort()
        return usedLabels
    }

  render () {
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          <Unread numUnread = {this.props.toolbarFun.countUnread()} />

          {this.checkButton()}

          {this.readButton()}

          {this.unreadButton()}

          <Dropdown optionArr = {this.props.labelArr} nullText = {'Apply Label'} changeCallback = {this.applyLabelCallback} />

          <Dropdown optionArr = {this.selectedLabels()} nullText = {'Remove Label'} changeCallback = {this.removeLabelCallback} />

          {this.trashButton()}
        </div>
      </div>
    )
  }
}


export default Toolbar