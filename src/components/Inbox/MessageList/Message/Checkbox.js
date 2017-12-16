import React, { Component } from 'react'

const Checkbox = (isChecked, callback) => {
    return (
        <div className="col-xs-2">
            <input onClick={callback} type="checkbox" checked={isChecked ? 'checked' : ''}/>
        </div>
    )
}

export default Checkbox