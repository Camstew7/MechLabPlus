import React from 'react'
import Weapon from './Weapon.jsx'
class ComponentsWindow extends React.Component {
 constructor(props) {
   super(props)

   this.state ={
     page: 'energy'
   }
 }

 render() {
   if(this.props.weapons){
    return (
      <div style = {{
        backgroundColor: '#535353',
        float:'right',
        top:'400px',
        marginRight:'100px'
      }}>
        <table>
          <tbody>
            <tr>
              <th onClick = {() => {
                this.setState({
                  page:'energy'
                })
              }}> Energy</th>
              <th onClick = {() => {
                this.setState({
                  page:'ballistic'
                })
              }}>Ballistic</th>
              <th onClick = {() => {
                this.setState({
                  page:'missile'
                })
              }}>Missile</th>
            </tr>
            <tr>
              <th>Name</th>
              <th>Tons</th>
              <th>Slots</th>
            </tr>
              {this.props.weapons.map((weapon, index) => {
                return(
                  <Weapon 
                  weapon = {weapon}
                  handleWeaponSelect = {this.props.handleWeaponSelect}
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
}

export default ComponentsWindow