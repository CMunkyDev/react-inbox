import React, { Component } from 'react'

class Button extends Component {
    constructor (props) {
        super(props)
        this.callback = this.props.callback
        this.innerFunc = this.props.innerFunc
        this.disabled = this.props.disabled

    }

    render () {
        return (
            <button  
            onClick={this.callback} className="btn btn-default" disabled = {this.props.disabled || false}>
                {this.innerFunc()}
            </button>
        )
    }
}

export default Button