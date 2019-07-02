const {Weapon} = require('./index.js')

module.exports.getAllWeapons = (callback) => {
  Weapon.find((err, result) => {
    if(err) {
      callback(err)
    } else {
      console.log(result[0])
      let shaped = result.map((weapon) => {
        if(weapon.family === 'BEAM') {
          weapon.family = 'Energy'
        } else if(weapon.family === 'BALLISTIC') {
          weapon.family = 'Ballistic'
        } else if(weapon.family === 'MISSILE') {
          weapon.family = "Missile"
        }
        return weapon
      })
      console.log(shaped)
      callback(null, shaped)
    }
  })
}