import React from 'react'
import Weapon from './Weapon.jsx'
class MountedStats extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mounted: this.props.mounted
    }
  }

  calcDPS() {
    if(this.props.mounted.length > 0) {
      return this.props.mounted.map((weapon) => {
        return (weapon.damage / weapon.cooldown)
      })
        .reduce((acc, cur) => {
          return Number(acc) + Number(cur)
      }, 0).toFixed(2)
    } else {
      return ''
    }
  }

  calcHPS() {
    if(this.props.mounted.length > 0) {
      return this.props.mounted.map((weapon) => {
        return (weapon.heat / weapon.cooldown)
      })
        .reduce((acc, cur) => {
          return Number(acc) + Number(cur)
      }, 0).toFixed(2)
    } else {
      return ''
    }
  }

  calcAlpha() {
    if(this.props.mounted.length > 0) {
      return this.props.mounted.map((weapon) => {
        return weapon.damage
      })
        .reduce((acc, cur) => {
          return Number(acc) + Number(cur)
      }, 0).toFixed(2)
    } else {
      return ''
    }
  }
  calcAlphaHeat() {
    if(this.props.mounted.length > 0) {
      return this.props.mounted.map((weapon) => {
        return weapon.heat
      })
        .reduce((acc, cur) => {
          return Number(acc) + Number(cur)
      }, 0).toFixed(2)
    } else {
      return ''
    }
  }

  render() {
    return (
      <div style = {{
        border: '2px solid black',
        height:'auto',
        width:'60%',
        backgroundColor:'#535353',
      }}>
        <h2>Mounted Stats</h2>
          <table>
            <tbody>
              <tr>
                <td>DPS:{this.calcDPS()}</td>
                <td>HPS:{this.calcHPS()}</td>
                <td>α:{this.calcAlpha()}</td>
                <td>αHeat:{this.calcAlphaHeat()}</td>
              </tr>
            </tbody>
          </table>
        <table>
          <tbody>
            {this.props.mounted.map((weapon, index) => {
              return (<Weapon 
              mounted = {true}
              weapon = {weapon}
              key = {index}
              />)
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default MountedStats