import React from 'react'
import ComponentsWindow from './ComponentsWindow.jsx'
import BodyPart from './BodyPart.jsx'
import MountedStats from './MountedStats.jsx'
class MechLab extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      activePart: '',
      armour: '',
      centerTorso: '',
      guidance: "",
      head: '',
      heatsinks: "",
      leftArm: '',
      leftLeg: '',
      leftTorso: '',
      mech: '',
      rightArm: '',
      rightLeg: '',
      rightTorso: '',
      structure: '',
      tonnage: '',
      weapons: [],
      mounted: [],
      faction: 'C'
    }
  }
  selectActivePart (part) {
    this.setState({
      activePart: part
    })
  }

  clearAll () {
    this.setState(this.props.mech[0])
    this.setState({
      mounted: []
    })
  }

  handleWeaponSelect (weapon) {
    var checkTonnage = (tonsToAdd) => {
      let currentTonnage = this.state.tonnage.split('/').map((tons) => {
        return Number(tons)
      })
      if((currentTonnage[0] + tonsToAdd) > currentTonnage[1]){
        alert('Not enough Remaining Tonnage')
        return false
      } else {
        return true
      }
    }
    var handleTonnageChange = (tons, state) => {
      let startingTons = state.tonnage.split('/').map((tons) => {
        return Number(tons)
      })

      startingTons[0] += tons

      state.tonnage = startingTons.join('/')

    }
    if(((this.state[this.state.activePart].components.length + this.state.weapons[weapon].slots) <= this.state[this.state.activePart].slots) && checkTonnage(this.state.weapons[weapon].tons)) {
      let cloneState = JSON.parse(JSON.stringify(this.state))
      let thisPart = {}
      let targetPart = this.state[this.state.activePart]
      for(let key in targetPart){
        thisPart[key] = targetPart[key]
      }
      for(let i = 0; i < this.state.weapons[weapon].slots; i++){
        thisPart.components.push(this.state.weapons[weapon].name)
      }
      cloneState[this.state.activePart] = thisPart
      cloneState.mounted.push(this.state.weapons[weapon])

      handleTonnageChange(this.state.weapons[weapon].tons, cloneState)
      this.setState(cloneState)
    } else {
     alert('not enough remaining slots')
    }
  }

  componentDidMount() {
    var mapPropsToState = () => {
      this.setState(this.props.mech[0])
    }
    if(this.state.armour === ''){
      mapPropsToState()
    }

    var mapWeaponData = (weapons) => {
      let mapped = []
      let factionFilter = new RegExp('^' + this.state.faction)
      var getData = (count) => {
        if(count < weapons.length){
          if(factionFilter.test(weapons[count].name)){
            fetch(weapons[count].data)
              .then((result) => {
                return result.json()
              })
              .then((parsedWeaponData) => {
                console.log('Loading:' + parsedWeaponData.weapon.name)
                mapped.push(parsedWeaponData.weapon)
                count++
                getData(count)
              })
              .catch(err => console.log(err))
          } else {
            console.log('skipping wrong faction')
            count++
            getData(count)
          }
        } else {
          console.log("All weapons loaded")
          this.setState({
            weapons: mapped
          })
        }
      }
      getData(0)
    }

    fetch('http://static.mwomercs.com/data/weapons/list.json')
      .then((response) => {
        return response.json()
      })
      .then((allWeaponsList) => {
        console.log(allWeaponsList)
        mapWeaponData(allWeaponsList.weapons)
      })
      .catch(err => console.log(err))
  }

  // componentDidUpdate() {
  //   var mapPropsToState = () => {
  //     console.log(this.props.mech[0])
  //     this.setState(this.props.mech[0])
  //     console.log(this.state.head)
  //   }
  //   if(this.state.armour === ''){
  //     mapPropsToState()
  //   }
  // }

  
  render() {
    if(this.state.mech !== '') {
      return(
        <div style = {{
          border: '2px solid grey',
          height:'80%',
          width:'100%',
          color: '#F2CE02',
          backgroundColor: '#535353'

        }}>
        <button 
        id='save' 
        onClick = {() => {
          this.props.save(this.state)
        }}
        style = {{
          float:'right'
        }}>Save</button>
        <button 
        id='export' 
        style = {{
          float: 'right'
        }}>Export</button>
        <button 
        id='clear'
        onClick = {this.clearAll.bind(this)}
        style = {{
          float:'right'
        }}
        >Clear</button>

        <img 
        src='https://c-6rtwjumjzx7877x24lfrjujinfx2ehzwx78jhisx2ehtr.g00.gamepedia.com/g00/3_c-6rbt.lfrjujinf.htr_/c-6RTWJUMJZX77x24myyux78x3ax2fx2flfrjujinf.hzwx78jhis.htrx2frbt_lfrjujinfx2f2x2f2gx2fYGW-X.uslx3fajwx78ntsx3d64fi604h0i574689g8918375322kfhj8x26n65h.rfwpx3dnrflj_$/$/$/$/$'
        style = {{
          float:'right',
          height:'270px',
          width:'300px'
        }}
        />
        <h1>{this.state.mech.replace(/_/g, ' ')}</h1>
        <h2>Tonnage: {this.state.tonnage}</h2>
        <h2>Structure Type: {this.state.structure}</h2>
        <h2>Armour Type: {this.state.armour}</h2>
        <h2>Guidance Type: {this.state.guidance}</h2>
        <ComponentsWindow 
          handleWeaponSelect = {this.handleWeaponSelect.bind(this)}
          weapons = {this.state.weapons}/>
        <div style = {{
          display:'grid',
          gridTemplateColumns: '10% 10% 10% 10% 10%',
          gridTemplateRows: '250px 375px px'
        }}>
          <BodyPart 
          partName = {'rightArm'}
          selected = {this.state.activePart}
          selectActivePart = {this.selectActivePart.bind(this)}
          thisPart = {this.state.rightArm}
          style = {{
            gridColumn:'1',
            gridRow:'2'
          }}
          />
          <BodyPart 
          partName = {'rightLeg'}
          selected = {this.state.activePart}
          selectActivePart = {this.selectActivePart.bind(this)}
          thisPart = {this.state.rightLeg}
          style={{
            gridColumn:'2',
            gridRow:'3'
          }}
          />
          <BodyPart 
          partName = {'rightTorso'}
          selected = {this.state.activePart}
          selectActivePart = {this.selectActivePart.bind(this)}
          thisPart = {this.state.rightTorso}
          style={{
            gridColumn:'2',
            gridRow:'2'
          }}
          />
          <BodyPart 
          id='head'
          partName = {'head'}
          selected = {this.state.activePart}
          selectActivePart = {this.selectActivePart.bind(this)}
          thisPart = {this.state.head}
          style={{
            gridColumn:'3',
            gridRow:'1'
          }}
          />
          <BodyPart 
          partName = {'centerTorso'}
          selected = {this.state.activePart}
          selectActivePart = {this.selectActivePart.bind(this)}
          thisPart = {this.state.centerTorso}
          style={{
            gridColumn:'3',
            gridRow:'2'
          }}
          />
          <BodyPart 
          partName = {'leftTorso'}
          selected = {this.state.activePart}
          selectActivePart = {this.selectActivePart.bind(this)}
          thisPart = {this.state.leftTorso}
          style={{
            gridColumn:'4',
            gridRow:'2'
          }}
          />
          <BodyPart 
          partName = {'leftLeg'}
          selected = {this.state.activePart}
          selectActivePart = {this.selectActivePart.bind(this)}
          thisPart = {this.state.leftLeg}
          style={{
            gridColumn:'4',
            gridRow:'3'
          }}
          />
          <BodyPart 
          partName = {'leftArm'}
          selected = {this.state.activePart}
          selectActivePart = {this.selectActivePart.bind(this)}
          thisPart = {this.state.leftArm}
          style={{
            gridColumn:'5',
            gridRow:'2'
          }}
          />
          </div>
          <MountedStats 
          mounted = {this.state.mounted}
          />
        
        </div>

      )
    } else {
      return (
        <div style = {{
          border: '2px solid black',
          height:'80%',
          width:'100%'
        }}>
        </div>
      )
    }
  }
}

export default MechLab