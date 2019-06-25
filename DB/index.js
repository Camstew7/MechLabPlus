const mongoose = require('mongoose');
if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/fetcher')
}

const mechSchema = mongoose.Schema({
  mech: String,
  tonnage: String,
  structure: String,
  Speed: String,
  armour: String,
  heatsinks: String,
  guidance: String,
  head:{
    armour: String,
    structure: String,
    slots: String,
    hardPoints: [String],
    components: [String]
  },
  centerTorso: {
    armour: String,
    engine: String,
    structure: String,
    slots: String,
    hardPoints: [String],
    components: [String]
  },
  rightTorso: {
    armour: String,
    structure: String,
    slots:String,
    hardPoints:[String],
    components: [String]
  },
  leftTorso: {
    armour: String,
    structure: String,
    slots:String,
    hardPoints:[String],
    components: [String]
  },
  rightArm: {
    armour: String,
    structure: String,
    slots:String,
    hardPoints:[String],
    components: [String]
  },
  leftArm: {
    armour: String,
    structure: String,
    slots:String,
    hardPoints:[String],
    components: [String]
  },
  leftLeg: {
    armour: String,
    structure: String,
    slots:String,
    hardPoints:[String],
    components: [String]
  },
  rightLeg: {
    armour: String,
    structure: String,
    slots:String,
    hardPoints:[String],
    components: [String]
  }
});

const buildSchema = mongoose.Schema({
  mech: String,
  tonnage: String,
  structure: String,
  Speed: String,
  armour: String,
  heatsinks: String,
  guidance: String,
  mounted:[Object],
  head:{
    armour: String,
    structure: String,
    slots: String,
    hardPoints: [String],
    components: [String]
  },
  centerTorso: {
    armour: String,
    engine: String,
    structure: String,
    slots: String,
    hardPoints: [String],
    components: [String]
  },
  rightTorso: {
    armour: String,
    structure: String,
    slots:String,
    hardPoints:[String],
    components: [String]
  },
  leftTorso: {
    armour: String,
    structure: String,
    slots:String,
    hardPoints:[String],
    components: [String]
  },
  rightArm: {
    armour: String,
    structure: String,
    slots:String,
    hardPoints:[String],
    components: [String]
  },
  leftArm: {
    armour: String,
    structure: String,
    slots:String,
    hardPoints:[String],
    components: [String]
  },
  leftLeg: {
    armour: String,
    structure: String,
    slots:String,
    hardPoints:[String],
    components: [String]
  },
  rightLeg: {
    armour: String,
    structure: String,
    slots:String,
    hardPoints:[String],
    components: [String]
  }
});

const Mech = mongoose.model('Mech', mechSchema);
const Build = mongoose.model('Build', buildSchema)

module.exports.Mech = Mech
module.exports.Build = Build