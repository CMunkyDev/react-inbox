import React, { Component } from 'react'
import Unread from './Toolbar/Unread'
import Button from './Toolbar/Button'
import Dropdown from './Toolbar/Dropdown'


class Toolbar extends Component {
  constructor (props) {
    super(props)

  }

  unreadButton = () => {
    return <Button innerFunc={() => 'Mark As Unread'} callback={this.props.toolbarFun.markUnread} {this.props.toolbarFun.noneSelected() ? 'disabled' : ''}/>
  }

  readButton = () => {
    return <Button innerFunc={() => 'Mark As Read'} callback={this.props.toolbarFun.markRead} {this.props.toolbarFun.noneSelected() ? 'disabled' : ''}/>
  }

  trashButton = () => {
    return <Button innerFunc={() => <i className="fa fa-trash-o"></i>} callback={this.props.toolbarFun.deleteMessages} {this.props.toolbarFun.noneSelected() ? 'disabled' : ''}/>
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
    return <Button textFunc = {() => this.checkButtonText()} callback = {this.checkButtonCallback()} />
  }

  render () {
    return (
      <div className="row toolbar">
        <div className="col-md-12">
          //UNREAD MESSAGES

          {this.checkButton()}

          {this.readButton()}

          {this.unreadButton()}

          //APPLY LABEL DROPDOWN

          //REMOVE LABEL DROPDOWN

          {this.trashButton()}
        </div>
      </div>
    )
  }
}


export default Toolbar