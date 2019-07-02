import React from 'react'
import Slot from './Slot.jsx'
var BodyPart = (props) => {

  // const [collectedProps, drop] = useDrop({
  //   accept: 'equipment',
  //   drop(item) {
  //     console.log(item)
  //     props.handleWeaponAdd(item.weapon, props.thisPart.Name)
  //   },
  //   canDrop() {
  //     return true
  //   }
  // })

  var renderSlotsWithEmpty = (equipment, target) => {
    let result = []
    for(let i = 0; i < equipment.length; i++) {
      const slots = equipment[i].stats ? equipment[i].stats.slots : equipment[i].slots
      for(let j = 0; j <= slots; j++){
        result.push(equipment[i].name)
      }
    }
    

    if(result.length < target) {
      while(result.length < target) {
        result.push('empty slot')
      }
    }
    return result
  }

  var renderHardpoints = (hardPoints) => {
    let result = ''

    for(let type in hardPoints) {
      if(result[type]) {
        result += `${type === 'AMS' || 'ECM' ? type : type[0]} `
      }
    }


    return result.trim()

  }

  return (
    <div style ={props.style}>
      <table 
      style={{
        float:'left',
        backgroundColor: '#535353',
        color: 'black',
        borderColor: props.selected === props.thisPart.Name ? '#4CBE0F' : 'black'
      }}
      onClick={() => {
        props.selectActivePart(props.thisPart.Name)
        }}>
        <tbody>
        <tr>
          <th>{props.thisPart.Name}</th>
        </tr>
        <tr>
          <th>{`Front Armour: ${props.thisPart.Armor}\n${props.thisPart.HasRear ? 'Rear Armour: ' + props.thisPart.RearArmor : ''}`}
          </th>
        </tr>
        <tr>:{renderHardpoints(props.thisPart.Hardpoints)}:</tr>
        <tr>
          <th>Structure: {Math.ceil(props.thisPart.MaxArmor / 2)}</th>
        </tr>
        {renderSlotsWithEmpty(props.thisPart.Equipment, props.thisPart.Slots).map((item, index) => {
          return (<Slot 
            handleWeaponAdd = {props.handleWeaponAdd}
            key={index} 
            item = {item}
            partName = {props.thisPart.Name}
            />)
        })}
        </tbody>
      </table>
    </div>
  )
}

export default BodyPart