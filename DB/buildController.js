const {Build} = require('./index.js')

module.exports.addBuild =  addBuild = (buildData, callback) => {
  Build.create(buildData, (err) => {
    if(err) {
      console.log(err)
      callback(err)
    } else {
      callback(null)
    }
  })
}