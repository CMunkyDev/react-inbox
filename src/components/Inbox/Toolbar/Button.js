import React, { Component } from 'react'

const Button = ({callback, innerFunc, disabled}) => {
    return (
        <button
            onClick={callback} className="btn btn-default" disabled={disabled || false}>
            {innerFunc()}
        </button>
    )
}

export default Button