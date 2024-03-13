const Doctor =require( '../models/doctorModel.js')
const Patients = require('../models/patientModel.js')
const Hospital = require('../models/hospitalModel.js')
const generateToken =require('../utils/generateToken.js')
const jwt = require('jsonwebtoken')

 const login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const doctor=await Doctor.findOne({email})
        if(doctor &&  doctor.password==password){
            const jwtToken= generateToken(doctor._id);
            console.log(jwtToken)
            res.status(200).json({
                _id:doctor._id,
                name:doctor.name,
                email:doctor.email,
                jwtToken:jwtToken
                
            })
        }else{
            res.status(401)
            throw new Error('Invalid email or password')
        }
    }catch(e){
        res.status(500).send(e)
    }
}

 const register=async(req,res)=>{
    try{
        const {name,email,password,mobile, adminJWT, exp, specialisation}=req.body
        const doctorExists=await Doctor.findOne({email})
        if(doctorExists){
            res.status(400)
            throw new Error('Doctor already exists')
        }
        
        //ahha
        console.log("trying to save...") 
        const doctor=await Doctor({
            name,
            email,
            password,
            mobile
        })
        await doctor.save();
        // save
        console.log("saved doctor!")
        // added id to current hospital
        const currentDocId = doctor._id
        console.log("id is: ", currentDocId)
        // fetch the currentHospital
        console.log("payload recieved: ", adminJWT)
        const payload = jwt.decode(adminJWT)
        console.log("afyer decoding: ", payload)
        // id of the hospital
        const hospId = payload.id
        console.log('id of hospital: ', hospId, typeof(hospId))
        const currentHospital = await Hospital.findOne({ _id: hospId})
        console.log('currenthospital: ', currentHospital)

        if (currentHospital){
            console.log("Current hopsital is: ", currentHospital)
        } else {
            console.log("hosp nahi aaya")
        }

        // creat doctor data structure
        const doctorData = {
            id: currentDocId,
            name: name
        }
        console.log("generated data for the hospital: ", doctorData)
        
        // long laborious code for adding the doctor in the hospital records
        switch (specialisation) {
            case 'ENT':
                if (exp == "senior") {
                    console.log('found senior')
                    currentHospital.ENT.senior = doctorData
                } else if (exp == 'junior') {
                    console.log('found junior')
                    currentHospital.ENT.junior = doctorData    
                }
                await currentHospital.save()
                console.log("saved to senior list")
                break
            case 'Ortho':
                    if (exp == "senior") {
                    console.log('found senior')
                    currentHospital.Ortho.senior = doctorData
                } else if (exp == 'junior') {
                    currentHospital.Ortho.junior = doctorData    
                }
                await currentHospital.save()
                break
            case 'Neuro':
                    if (exp == "senior") {
                        console.log('found senior')
                        currentHospital.Neuro.senior = doctorData
                    } else if (exp == 'junior') {
                        currentHospital.Neuro.junior = doctorData    
                    }
                    await currentHospital.save()
                    break
            case 'Pediatrics':
                if (exp == "senior") {
                    console.log('found senior')
                    currentHospital.Pediatrics.senior = doctorData
                } else if (exp == 'junior') {
                    currentHospital.Pediatrics.junior = doctorData    
                }
                await currentHospital.save()
                break
            case 'Cardio':
                    if (exp == "senior") {
                        console.log('found senior')
                        currentHospital.Cardio.senior = doctorData
                    } else if (exp == 'junior') {
                        currentHospital.Cardio.junior = doctorData    
                }
                await currentHospital.save()
                break
            case 'Pulmonary':
                    if (exp == "senior") {
                        console.log('found senior')
                        currentHospital.Pulmonary.senior = doctorData
                    } else if (exp == 'junior') {
                        currentHospital.Pulmonary.junior = doctorData    
                }
                await currentHospital.save()
                break
            case 'Dental':
                    if (exp == "senior") {
                        console.log('found senior')
                        currentHospital.Dental.senior = doctorData
                    } else if (exp == 'junior') {
                    currentHospital.Dental.junior = doctorData    
                }
                await currentHospital.save()
                break
            case 'Gynecology':
                if (exp == "senior") {
                    console.log('found senior')
                    currentHospital.Gynecology.senior = doctorData
                } else if (exp == 'junior') {
                    currentHospital.Gynecology.junior = doctorData    
                }
                await currentHospital.save()
                break
            case 'Dermatology':
                    if (exp == "senior") {
                        console.log('found senior')
                        currentHospital.Dermatology.senior = doctorData
                    } else if (exp == 'junior') {
                    currentHospital.Dermatology.junior = doctorData    
                }
                await currentHospital.save()
                break
            case 'Psychiatry':
                    if (exp == "senior") {
                    console.log('found senior')
                    currentHospital.Psychiatry.senior = doctorData
                } else if (exp == 'junior') {
                    currentHospital.Psychiatry.junior = doctorData    
                }
                await currentHospital.save()
                break
                
                default:
                    console.log("ajeeb hogya")
                    break;
        }

        const jwtToken = generateToken(doctor._id);
        res.json({
            _id:doctor._id,
            name:doctor.name,
            email:doctor.email,
            jwtToken:jwtToken
            
        })
    }
    catch(e){
        res.status(500).send(e)
    }
}

 const getDoctor=async(req,res)=>{
    try{
        console.log("getDoctor")
        console.log(req.body.doctor_id)
        const doctor=await Doctor.findOne({_id: req.body.doctor_id})
        res.status(200).json(doctor)
    }catch(e){
        res.status(500)
    }
}

const getPatients = async(req, res)=>{
    const {doctor_id} = req.body
    console.log("doctor_id: ", doctor_id)
    const patients = await Patients.find({DoctorAssigned: doctor_id})
    console.log("patients: ", patients)
    res.json(patients)
}

const doneForToday = async(req, res)=>{
    const {jwtToken} = req.body

    const data = jwt.decode(jwtToken)
    console.log("data: ", data)
    const {name, id} =data
    console.log(id)

    const doctor = await Doctor.findOne({_id: id})
    console.log("doctor: ", doctor)
    const todayPatients = doctor.today
    const tomorrowPatients = doctor.tomorrow
    const combinedArray =  [todayPatients, tomorrowPatients]
    // clear todays patients

    if ((todayPatients.length + tomorrowPatients.length) > 28){
        const leftoverLen = todayPatients.length + tomorrowPatients.length - 28
        await Doctor.findByIdAndUpdate({_id: id, today: combinedArray.slice(0, leftoverLen),tomorrow: combinedArray.slice(leftoverLen)})
    } else{
        await Doctor.findByIdAndUpdate({_id: id, today: [combinedArray]})
    }
    
    // append them to tomorrow
}

module.exports={login,register,getDoctor, doneForToday, getPatients};








