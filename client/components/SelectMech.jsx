import React from 'react'

var SelectMech = (props) => {
  return (
    <div>
      <select
        onChange = {(e) => {props.handleMechSelect(e.target.value)}}>
        <option value="none">None</option>
        {props.mechs.map((mechName, index) => {
          return (<option key={index} value={mechName}>{mechName}</option>)
        })}
      </select>
    </div>
  )
}

export default SelectMech