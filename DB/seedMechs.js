const {addMech} = require('./mechControllers')
const {Mech} = require('./index.js')

let mechs = [
  {
    mech: "Timber_Wolf_TBR-A",
    tonnage: '35.5/75',
    structure: "Endo-Steel",
    armour:'Ferro-Fibrous',
    heatsinks:'Double',
    guidance:'Standard',
    head:{
      armour: "0/18",
      structure: "15",
      slots:"6",
      components: ["life support", "sensors", "cockpit", "fixed armour"]
    },
    centerTorso: {
      armour: "0/92",
      engine: "clan XL 375",
      engineHeatSinks: '15/15',
      structure: "46",
      slots: "12",
      hardPoints:['E'],
      components: ['gyro', 'gyro', 'gyro', 'gyro', 'fixed structure', 'clan XL 375', 'clan XL 375','clan XL 375', 'clan XL 375', 'heatsinks']
    },
    rightTorso: {
      armour: "0/92",
      structure: '32',
      slots: '12',
      hardPoints:['E', 'E', 'E'],
      components: ['fixed armour', 'fixed armour', 'fixed structure', 'XL engine', 'XL engine']
    },
    leftTorso: {
      armour: "0/92",
      structure: '32',
      slots: '12',
      hardPoints:['M'],
      components: ['fixed armour', 'fixed armour', 'fixed structure', 'XL engine', 'XL engine']
    },
    rightArm: {
      armour: '0/48',
      structure: '24',
      slots: '12',
      hardPoints:['E'],
      components: ['shoulder', 'upper arm actuator', 'fixed armour']
    },
    leftArm: {
      armour: '0/48',
      structure: '24',
      slots: '12',
      hardPoints:['E'],
      components: ['shoulder', 'upper arm actuator', 'fixed armour']
    },
    leftLeg: {
      armour: '0/64',
      structure: '32',
      slots: '6',
      hardPoints:[],
      components: ['hip', 'upper leg actuator', 'lower leg actuator', 'fixed structure', 'fixed structure']
    },
    rightLeg: {
      armour: '0/64',
      structure: '32',
      slots: '6',
      hardPoints:[],
      components: ['hip', 'upper leg actuator', 'lower leg actuator', 'fixed structure', 'fixed structure']
    }
  }
]

Mech.deleteMany((err) => {
  if(err){ 
    console.log(err)
  } else {
    console.log('old documents deleted')
    mechs.forEach((mech) => {
      console.log('adding:' + mech.mech)
      addMech(mech)
    })
  }
})
