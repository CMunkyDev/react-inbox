import React, { Component } from 'react'

const Labels = (labelArr) => {
    return labelArr.map(label => <span className="label label-warning">{label}</span>)
}

export default Labels