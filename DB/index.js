const mongoose = require('mongoose');
if(process.env.MONGODB_URI){
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect('mongodb://localhost/fetcher')
}

const mechSchema = mongoose.Schema({
	MechID: {
		type: 'Number'
	},
	Name: {
		type: 'String'
	},
	Class: {
		type: 'String'
	},
	Icon: {
		type: 'String'
	},
	MaxTons: {
		type: 'Number'
	},
	TotalTons: {
		type: 'Number'
	},
	BaseTons: {
		type: 'Number'
	},
	TotalArmor: {
		type: 'Number'
	},
	MaxArmor: {
		type: 'Number'
	},
	MaxJumpJets: {
		type: 'Number'
	},
	CanEquipECM: {
		type: 'Boolean'
	},
	Chassis: {
		type: 'String'
	},
	MaxEngine: {
		Rating: {
			type: 'Number'
		},
		Speed: {
			type: 'Number'
		}
	},
	CurrentEngine: {
		Rating: {
			type: 'Number'
		},
		Speed: {
			type: 'Number'
		}
	},
	MinEngine: {
		Rating: {
			type: 'Number'
		},
		Speed: {
			type: 'Number'
		}
	},
	Upgrades: {
		Armor: {
			Type: {
				type: 'String'
			},
			PointsPerTon: {
				type: 'Number'
			}
		},
		Structure: {
			Type: {
				type: 'String'
			},
			internalStructureMultiplier: {
				type: 'Number'
			}
		},
		Artemis: {
			type: 'Boolean'
		},
		DoubleHeatsinks: {
			type: 'Boolean'
		}
	},
	Firepower: {
		type: 'Number'
	},
	HeatEfficiency: {
		type: 'Number'
	},
	Loadout: {
		head: {
			Name: {
				type: 'String'
			},
			PartID: {
				type: 'Number'
			},
			Omni: {
				type: 'Boolean'
			},
			Armor: {
				type: 'Number'
			},
			MaxArmor: {
				type: 'Number'
			},
			HasRear: {
				type: 'Boolean'
			},
			RearArmor: {
				type: 'Number'
			},
			TotalSlots: {
				type: 'Number'
			},
			Chassis: {
				type: 'String'
			},
			MechSet: {
				type: 'String'
			},
			Hardpoints: {
				Ballistic: {
					type: 'Number'
				},
				Energy: {
					type: 'Number'
				},
				Missile: {
					type: 'Number'
				},
				AMS: {
					type: 'Number'
				},
				ECM: {
					type: 'Number'
				}
			},
			Equipment: {
				type: [
					'Mixed'
				]
			},
			Slots: {
				type: 'Number'
			}
		},
		centre_torso: {
			Name: {
				type: 'String'
			},
			PartID: {
				type: 'Number'
			},
			Omni: {
				type: 'Boolean'
			},
			Armor: {
				type: 'Number'
			},
			MaxArmor: {
				type: 'Number'
			},
			HasRear: {
				type: 'Boolean'
			},
			RearArmor: {
				type: 'Number'
			},
			TotalSlots: {
				type: 'Number'
			},
			Chassis: {
				type: 'String'
			},
			MechSet: {
				type: 'String'
			},
			Hardpoints: {
				Ballistic: {
					type: 'Number'
				},
				Energy: {
					type: 'Number'
				},
				Missile: {
					type: 'Number'
				},
				AMS: {
					type: 'Number'
				},
				ECM: {
					type: 'Number'
				}
			},
			Equipment: {
				type: [
					'Mixed'
				]
			},
			Slots: {
				type: 'Number'
			}
		},
		right_leg: {
			Name: {
				type: 'String'
			},
			PartID: {
				type: 'Number'
			},
			Omni: {
				type: 'Boolean'
			},
			Armor: {
				type: 'Number'
			},
			MaxArmor: {
				type: 'Number'
			},
			HasRear: {
				type: 'Boolean'
			},
			RearArmor: {
				type: 'Number'
			},
			TotalSlots: {
				type: 'Number'
			},
			Chassis: {
				type: 'String'
			},
			MechSet: {
				type: 'String'
			},
			Hardpoints: {
				Ballistic: {
					type: 'Number'
				},
				Energy: {
					type: 'Number'
				},
				Missile: {
					type: 'Number'
				},
				AMS: {
					type: 'Number'
				},
				ECM: {
					type: 'Number'
				}
			},
			Equipment: {
				type: [
					'Mixed'
				]
			},
			Slots: {
				type: 'Number'
			}
		},
		left_leg: {
			Name: {
				type: 'String'
			},
			PartID: {
				type: 'Number'
			},
			Omni: {
				type: 'Boolean'
			},
			Armor: {
				type: 'Number'
			},
			MaxArmor: {
				type: 'Number'
			},
			HasRear: {
				type: 'Boolean'
			},
			RearArmor: {
				type: 'Number'
			},
			TotalSlots: {
				type: 'Number'
			},
			Chassis: {
				type: 'String'
			},
			MechSet: {
				type: 'String'
			},
			Hardpoints: {
				Ballistic: {
					type: 'Number'
				},
				Energy: {
					type: 'Number'
				},
				Missile: {
					type: 'Number'
				},
				AMS: {
					type: 'Number'
				},
				ECM: {
					type: 'Number'
				}
			},
			Equipment: {
				type: [
					'Mixed'
				]
			},
			Slots: {
				type: 'Number'
			}
		},
		left_torso: {
			Name: {
				type: 'String'
			},
			PartID: {
				type: 'Number'
			},
			Omni: {
				type: 'Boolean'
			},
			Armor: {
				type: 'Number'
			},
			MaxArmor: {
				type: 'Number'
			},
			HasRear: {
				type: 'Boolean'
			},
			RearArmor: {
				type: 'Number'
			},
			TotalSlots: {
				type: 'Number'
			},
			Chassis: {
				type: 'String'
			},
			MechSet: {
				type: 'String'
			},
			Hardpoints: {
				Ballistic: {
					type: 'Number'
				},
				Energy: {
					type: 'Number'
				},
				Missile: {
					type: 'Number'
				},
				AMS: {
					type: 'Number'
				},
				ECM: {
					type: 'Number'
				}
			},
			Equipment: {
				type: [
					'Mixed'
				]
			},
			Slots: {
				type: 'Number'
			}
		},
		right_torso: {
			Name: {
				type: 'String'
			},
			PartID: {
				type: 'Number'
			},
			Omni: {
				type: 'Boolean'
			},
			Armor: {
				type: 'Number'
			},
			MaxArmor: {
				type: 'Number'
			},
			HasRear: {
				type: 'Boolean'
			},
			RearArmor: {
				type: 'Number'
			},
			TotalSlots: {
				type: 'Number'
			},
			Chassis: {
				type: 'String'
			},
			MechSet: {
				type: 'String'
			},
			Hardpoints: {
				Ballistic: {
					type: 'Number'
				},
				Energy: {
					type: 'Number'
				},
				Missile: {
					type: 'Number'
				},
				AMS: {
					type: 'Number'
				},
				ECM: {
					type: 'Number'
				}
			},
			Equipment: {
				type: [
					'Mixed'
				]
			},
			Slots: {
				type: 'Number'
			}
		},
		right_arm: {
			Name: {
				type: 'String'
			},
			PartID: {
				type: 'Number'
			},
			Omni: {
				type: 'Boolean'
			},
			Armor: {
				type: 'Number'
			},
			MaxArmor: {
				type: 'Number'
			},
			HasRear: {
				type: 'Boolean'
			},
			RearArmor: {
				type: 'Number'
			},
			TotalSlots: {
				type: 'Number'
			},
			Chassis: {
				type: 'String'
			},
			MechSet: {
				type: 'String'
			},
			Hardpoints: {
				Ballistic: {
					type: 'Number'
				},
				Energy: {
					type: 'Number'
				},
				Missile: {
					type: 'Number'
				},
				AMS: {
					type: 'Number'
				},
				ECM: {
					type: 'Number'
				}
			},
			Equipment: {
				type: [
					'Mixed'
				]
			},
			Slots: {
				type: 'Number'
			}
		},
		left_arm: {
			Name: {
				type: 'String'
			},
			PartID: {
				type: 'Number'
			},
			Omni: {
				type: 'Boolean'
			},
			Armor: {
				type: 'Number'
			},
			MaxArmor: {
				type: 'Number'
			},
			HasRear: {
				type: 'Boolean'
			},
			RearArmor: {
				type: 'Number'
			},
			TotalSlots: {
				type: 'Number'
			},
			Chassis: {
				type: 'String'
			},
			MechSet: {
				type: 'String'
			},
			Hardpoints: {
				Ballistic: {
					type: 'Number'
				},
				Energy: {
					type: 'Number'
				},
				Missile: {
					type: 'Number'
				},
				AMS: {
					type: 'Number'
				},
				ECM: {
					type: 'Number'
				}
			},
			Equipment: {
				type: [
					'Mixed'
				]
			},
			Slots: {
				type: 'Number'
			}
		}
	},
	ChassisData: {
		MovementArchetype: {
			type: 'String'
		},
		MaxMovementSpeed: {
			type: 'Number'
		},
		TorsoTurnSpeedYaw: {
			type: 'Number'
		},
		TorsoTurnSpeedPitch: {
			type: 'Number'
		},
		ArmTurnSpeedYaw: {
			type: 'Number'
		},
		ArmTurnSpeedPitch: {
			type: 'Number'
		},
		TurnLerpLowRate: {
			type: 'Number'
		},
		TurnLerpMidRate: {
			type: 'Number'
		},
		TurnLerpHighRate: {
			type: 'Number'
		},
		AccelLerpLowRate: {
			type: 'Number'
		},
		AccelLerpMidRate: {
			type: 'Number'
		},
		AccelLerpHighRate: {
			type: 'Number'
		},
		DecelLerpLowRate: {
			type: 'Number'
		},
		DecelLerpMidRate: {
			type: 'Number'
		},
		DecelLerpHighRate: {
			type: 'Number'
		},
		ReverseSpeedMultiplier: {
			type: 'Number'
		},
		MaxTorsoAngleYaw: {
			type: 'Number'
		},
		MaxTorsoAnglePitch: {
			type: 'Number'
		},
		MaxArmRotationYaw: {
			type: 'Number'
		},
		MaxArmRotationPitch: {
			type: 'Number'
		},
		TurnLerpLowSpeed: {
			type: 'Number'
		},
		TurnLerpMidSpeed: {
			type: 'Number'
		},
		TurnLerpHighSpeed: {
			type: 'Number'
		},
		DecelLerpLowSpeed: {
			type: 'Number'
		},
		DecelLerpMidSpeed: {
			type: 'Number'
		},
		DecelLerpHighSpeed: {
			type: 'Number'
		},
		AccelLerpLowSpeed: {
			type: 'Number'
		},
		AccelLerpMidSpeed: {
			type: 'Number'
		},
		AccelLerpHighSpeed: {
			type: 'Number'
		},
		MaxFreeLookYaw: {
			type: 'Number'
		},
		MaxFreeLookPitch: {
			type: 'Number'
		},
		JumpJetSpread: {
			type: 'Number'
		}
	},
	QuirkList: {
		isautocannon20_cooldown_multiplier: {
			type: 'Number'
		},
		ballistic_cooldown_multiplier: {
			type: 'Number'
		},
		ballistic_range_multiplier: {
			type: 'Number'
		},
		ballistic_velocity_multiplier: {
			type: 'Number'
		},
		energy_heat_multiplier: {
			type: 'Number'
		},
		energy_range_multiplier: {
			type: 'Number'
		},
		turnlerp_all_multiplier: {
			type: 'Number'
		},
		torsospeed_yaw_multiplier: {
			type: 'Number'
		},
		armorresist_rt_additive: {
			type: 'Number'
		},
		internalresist_rt_additive: {
			type: 'Number'
		},
		critchance_receiving_multiplier: {
			type: 'Number'
		}
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

const weaponSchema = {
	id: {
		type: 'Date'
	},
	type: {
		type: 'String'
	},
	tons: {
		type: 'Number'
	},
	slots: {
		type: 'Number'
	},
	price: {
		id: {
			type: 'Number'
		},
		mc: {
			type: 'Number'
		},
		cb: {
			type: 'Number'
		}
	},
	name: {
		type: 'String'
	},
	translated_name: {
		type: 'String'
	},
	translated_desc: {
		type: 'String'
	},
	family: {
		type: 'String'
	},
	min_range: {
		type: 'Number'
	},
	long_range: {
		type: 'Number'
	},
	max_range: {
		type: 'Number'
	},
	cooldown: {
		type: 'String'
	},
	speed: {
		type: 'Date'
	},
	impulse: {
		type: 'String'
	},
	duration: {
		type: 'String'
	},
	heat: {
		type: 'String'
	},
	artemis_restricted_to: {
		type: 'Date'
	},
	num_shots: {
		type: 'Number'
	},
	calc_stats: {
		damageMultiplier: {
			type: 'Date'
		},
		baseDmg: {
			type: 'Number'
		},
		dmg: {
			type: 'Number'
		},
		dps: {
			type: 'Number'
		},
		hps: {
			type: 'Number'
		},
		ehs: {
			type: 'Number'
		}
	},
	min_heat_penalty_level: {
		type: 'Number'
	},
	heat_penalty: {
		type: 'Number'
	},
	heat_penalty_id: {
		type: 'Number'
	}
}

const Mech = mongoose.model('Mech', mechSchema);
const Build = mongoose.model('Build', buildSchema)
const Weapon = mongoose.model('Weapon', weaponSchema)

module.exports.Mech = Mech
module.exports.Build = Build
module.exports.Weapon = Weapon