import React from 'react'

const Dropdown = ({optionArr, nullText, changeCallback}) => {
    return (
        <select onChange={changeCallback} className="form-control label-select">
            <option value=''>{nullText}</option>
            {optionArr.map((option, index) => <option key = { index } value = { option }>{ option }</option>)}
        </select>
    )
}

export default Dropdown