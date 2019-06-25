import React from 'react'


var BodyPart = (props) => {

  var fillSlotsWithEmpty = (components, target) => {
    let filled = components.slice()
    for(let i = 0; filled.length < target; i++){
      filled.push('empty')
    }
    return filled
  }

  return (
    <div style ={props.style}>
      <table 
      style={{
        float:'left',
        backgroundColor: '#535353',
        color: 'black',
        borderColor: props.selected === props.partName ? '#4CBE0F' : 'black'
      }}
      onClick={() => {
        props.selectActivePart(props.partName)
        }}>
        <tbody>
        <tr>
          <th>{props.partName}</th>
        </tr>
        <tr>
          <th>Front Armour: {props.thisPart.armour}</th>
        </tr>
        <tr>
          <th>Structure: {props.thisPart.structure}</th>
        </tr>
        {fillSlotsWithEmpty(props.thisPart.components, props.thisPart.slots).map((slot, index) => {
          return (<tr key={index}><td>{slot}</td></tr>)
        })}
        </tbody>
      </table>
    </div>
  )
}

export default BodyPart