import React from 'react'
import Weapon from './Weapon.jsx'
import {useDrop} from 'react-dnd-cjs'

var ComponentsWindow = (props) => {
  
  const [collectedProps, drop] = useDrop({
    accept: 'weapon',
    drop(equipment) {
      props.handleWeaponAdd(equipment.weapon, props.partName)
    }
  })

  let page = 'Energy'

  if(props.weapons){
    return (
      <div style = {{
        backgroundColor: '#535353',
        float:'right',
        top:'400px',
        marginRight:'100px'
      }}>
        <table ref={drop}>
          <tbody>
            <tr>
              <th>Energy</th>
              <th>Ballistic</th>
              <th>Missile</th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Tons</th>
              <th>Slots</th>
            </tr>
              {props.weapons.map((weapon, index) => {
                return(
                  <Weapon 
                  weapon = {weapon}
                  handleWeaponSelect = {props.handleWeaponSelect}
                  key = {index}
                  id = {index}
                  />
                )
              })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ComponentsWindow