import React from 'react'
import { useDrop } from 'react-dnd-cjs'
import { useDrag } from 'react-dnd-cjs'
var Slot = (props) => {
  const [collectedProps, drop] = useDrop({
    accept: 'weapon',
    drop(equipment) {
      props.handleWeaponAdd(equipment.weapon, props.partName)
    }
  })

  const [{isDragging}, drag] = useDrag({
    item: { 
      type: 'remove'
    },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })
  
  return props.item !== 'empty slot' ?  (<tr><td ref={drag}>{props.item}</td></tr>) : (<tr><td ref={drop}>Empty Slot</td></tr>)
}

export default Slot