import React, { Component } from 'react'
import Star from './Message/Star'
import Subject from './Message/Subject'
import Checkbox from './Message/Checkbox'
import Labels from './Message/Labels'

class Message extends Component{
  constructor ({props}) {
    super(props)
  }

  render () {
    return (
      <div className="row message read selected">
        <div className="col-xs-1">
          <div className="row">
            <Checkbox />
            <Star />
          </div>
        </div>
        <div className="col-xs-11">
          <Labels />
          <Subject />
        </div>
      </div>
    )
  }
}

export default Message