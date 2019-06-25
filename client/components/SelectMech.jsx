import React from 'react'

var SelectMech = (props) => {
  return (
    <div>
      <select
        onChange = {(e) => {props.handleMechSelect(e.target.value)}}>
        <option value="none">None</option>
        <option value="Timber_Wolf_TBR-A">Timber Wolf TBR-A</option>
      </select>
    </div>
  )
}

export default SelectMech