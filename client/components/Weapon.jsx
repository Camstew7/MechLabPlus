import React from 'react'

var Weapon = (props) => {
  if(!props.mounted) {
    return (
    <tr
    onClick = {() => {
      props.handleWeaponSelect(props.id)
    }}>
      <td>{props.weapon.name}</td>
      <td>{props.weapon.tons}</td>
      <td>{props.weapon.slots}</td>
    </tr>
    )
  } else {
    return (
      <tr>
        <td>{props.weapon.name}</td>
        <td>α:{props.weapon.damage} X {props.weapon.numFiring}</td>
        <td>αHeat:{props.weapon.heat}</td>
        <td>CD:{props.weapon.cooldown}</td>
        <td>ammo:{props.weapon.ammoType} X {props.weapon.ammoPerShot}</td>
        <td>Δt:{props.weapon.duration}</td>
        <td>DPS:{((props.weapon.damage * props.weapon.numFiring) / props.weapon.cooldown).toFixed(2)}</td>
        <td>HPS:{(props.weapon.heat / props.weapon.cooldown).toFixed(2)}</td>
        <td>DPH:{((props.weapon.damage * props.weapon.numFiring) / props.weapon.heat).toFixed(2)}</td>
        <td>APS:{(props.weapon.ammoPerShot / props.weapon.cooldown).toFixed(2)}</td>
        <td>DPT:{((props.weapon.damage * props.weapon.numFiring) / props.weapon.tons).toFixed(2)}</td>
        <td>D/Slot:{((props.weapon.damage * props.weapon.numFiring) / props.weapon.slots).toFixed(2)}</td>
        <td>DPS/ton:{(((props.weapon.damage * props.weapon.numFiring)/ props.weapon.cooldown) / props.weapon.tons).toFixed(2)}</td>
      </tr>
    )
  }
}

export default Weapon