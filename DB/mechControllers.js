const {Mech} = require('./index.js')

module.exports.addMech =  addMech = (mechData) => {
  Mech.create(mechData, (err) => {
    if(err) {
      console.log(err)
    }
  })
}

module.exports.findMech = findMech = (mechToFind, callback, findAll = false) => {
  if(findAll){
    Mech.find((err, result) => {
      if(err){
        callback(err)
      } else {
        callback(null, result)
      }
    })
  } else {
    Mech.find({mech: mechToFind}, (err, result) => {
      if(err){
        callback(err)
      } else {
        callback(null, result)
      }
    })
  }
}

