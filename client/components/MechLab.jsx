import React from 'react'
import ComponentsWindow from './ComponentsWindow.jsx'
import BodyPart from './BodyPart.jsx'
import MountedStats from './MountedStats.jsx'
import { DndProvider } from 'react-dnd-cjs'
import HTML5Backend from 'react-dnd-html5-backend-cjs'

class MechLab extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      weapons: [],
      mounted: [],
      faction: 'C'
    }
  }


  clearAll () {
    this.setState(this.props.mech)
    this.setState({
      mounted: []
    })
  }

  handleWeaponAdd (weapon, bodyPart) {
    var checkTonnage = (tonsToAdd) => {
      return this.state.TotalTons + tonsToAdd < this.state.MaxTons ? true : false
    }
    var checkSlots = (slotsToAdd) => {
      let freeSlots = this.state.Loadout[bodyPart].Equipment.reduce((acc, cur) => {
        let slots = cur.stats ? cur.stats.slots : cur.slots
        return acc + slots
      }, 0)
      return freeSlots - slotsToAdd > 0 ? true : false
    }
    var checkHardpoints = () => {
      if(this.state.Loadout[bodyPart].Hardpoints) {

      }
    }
    
    var handleHardpointChange = () => {

    }

    var handleTonnageChange = (tons) => {
      return this.state.TotalTons + tons
    }



    if(!checkTonnage(weapon.tons)) {
      alert('Not enough Tonnage remaining')
      return
    }
    if(!checkSlots(weapon.slots)) {
      alert('Not enough Slots remaining')
      return
    }
    this.setState({
      ...this.state,
      TotalTons: handleTonnageChange(weapon.tons),
      Loadout: {
        ...this.state.Loadout,
        [bodyPart]: {
          ...this.state.Loadout[bodyPart],
          Equipment: [...this.state.Loadout[bodyPart].Equipment, weapon]
        }
      }
    }) 
  }

  componentDidMount() {

    var mapPropsToState = () => {
      let copyProps = JSON.parse(JSON.stringify(this.props.mech))
      this.setState(copyProps)
    }
    if(!this.state.Class){
      mapPropsToState()
    }

    fetch('http://localhost:3000/weapons')
      .then((response) => {
        return response.json()
      })
      .then((allWeaponsList) => {
        this.setState({
          weapons: allWeaponsList
        })
      })
      .catch(err => console.log(err))

  }


  
  render() {
    if(this.state.Name) {
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
        <h1>{this.state.Chassis.toUpperCase() + ' ' + this.state.Name.toUpperCase()} </h1>
        <h2>Tonnage: {this.state.TotalTons + '/' + this.state.MaxTons}</h2>
        <h2>Structure Type: {this.state.Upgrades.Structure.Type}</h2>
        <h2>Armour Type: {this.state.Upgrades.Armor.Type}</h2>
        <h2>Guidance Type: {this.state.Artemis ? 'Standard' : 'Artemis IV'}</h2>
        <h2>Total Armour: {this.state.TotalArmor + '/' + this.state.MaxArmor}</h2>
        <DndProvider backend={HTML5Backend}>
        <ComponentsWindow 
          handleWeaponAdd = {this.handleWeaponAdd.bind(this)}
          weapons = {this.state.weapons}/>
        <div style = {{
          display:'grid',
          gridTemplateColumns: '10% 10% 10% 10% 10%',
          gridTemplateRows: '250px 375px px'
        }}>
          <BodyPart
          handleWeaponAdd = {this.handleWeaponAdd.bind(this)}
      
          thisPart = {this.state.Loadout.right_arm}
          style = {{
            gridColumn:'1',
            gridRow:'2'
          }}
          />
          <BodyPart
          handleWeaponAdd = {this.handleWeaponAdd.bind(this)}
          thisPart = {this.state.Loadout.right_leg}
          style={{
            gridColumn:'2',
            gridRow:'3'
          }}
          />
          <BodyPart
          handleWeaponAdd = {this.handleWeaponAdd.bind(this)}
      
          thisPart = {this.state.Loadout.right_torso}
          style={{
            gridColumn:'2',
            gridRow:'2'
          }}
          />
          <BodyPart
          handleWeaponAdd = {this.handleWeaponAdd.bind(this)} 

      
          thisPart = {this.state.Loadout.head}
          style={{
            gridColumn:'3',
            gridRow:'1'
          }}
          />
          <BodyPart
          handleWeaponAdd = {this.handleWeaponAdd.bind(this)}
      
          thisPart = {this.state.Loadout.centre_torso}
          style={{
            gridColumn:'3',
            gridRow:'2'
          }}
          />
          <BodyPart
          handleWeaponAdd = {this.handleWeaponAdd.bind(this)}
      
          thisPart = {this.state.Loadout.left_torso}
          style={{
            gridColumn:'4',
            gridRow:'2'
          }}
          />
          <BodyPart
          handleWeaponAdd = {this.handleWeaponAdd.bind(this)}
      
          thisPart = {this.state.Loadout.left_leg}
          style={{
            gridColumn:'4',
            gridRow:'3'
          }}
          />
          <BodyPart
          handleWeaponAdd = {this.handleWeaponAdd.bind(this)}
      
          thisPart = {this.state.Loadout.left_arm}
          style={{
            gridColumn:'5',
            gridRow:'2'
          }}
          />
          </div>
          <MountedStats 
          mounted = {this.state.mounted}
          />
        </DndProvider>
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