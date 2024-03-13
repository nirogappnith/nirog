const mongoose = require('mongoose')

const HospitalSchema = mongoose.Schema({
  type: {
    type: String,
    
    default: 'govt'    
  },
  ENT:{
    senior:{
      type:Object
    },
    junior:
    {
      type:Object
    }
  },
  Ortho:{
    senior:{
      type: Object
    },
    junior:
    {
      type:Object
    }
  },
  Neuro:{
    senior:{
      type: Object
    },
    junior:
    {
      type:Object
    }
  },
  Pediatrics:{
    senior:{
      type: Object
    },
    junior:
    {
      type:Object
    }
  },
  Cardio:{
    senior:{
      type: Object
    },
    junior:
    {
      type:Object
    }
  },
  Pulmonary:{
    senior:{
      type: Object
    },
    junior:
    {
      type:Object
    }
  },
  Dental:{
    senior:{
      type: Object
    },
    junior:
    {
      type:Object
    }
  },
  Gynecology:{
    senior:{
      type: Object
    },
    junior:
    {
      type:Object
    }
  },
  Dermatology:{
    senior:{
      type: Object
    },
    junior:
    {
      type:Object
    }
  },
  Dental:{
    senior:{
      type: Object
    },
    junior:
    {
      type:Object
    }
  },
  Psychiatry:{
    senior:{
      type: Object
    },
    junior:
    {
      type:Object
    }
  },  
  name: {
    type: String,
    required: true,
    unique: true
  },
  address:{
    type: String,
    
  },
  pincode: {
    type: Number,
    
  },
  patients: {
    type: Array,
    
  },
  password: {
    type: String
  },
  email:{
    type:String,
    
  },
  
})



const Hospital = mongoose.model('Hospital', HospitalSchema)
module.exports = Hospital
// Path: electrothon6.0/backend/models/hospitalModel.js
