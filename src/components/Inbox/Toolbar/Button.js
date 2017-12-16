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
            <button onClick={callback} className="btn btn-default">
                {this.innerFunc()}
            </button>
        )
    }
}

export default Button