const bcrypt = require('bcrypt')
const Hospital =require( '../models/hospitalModel.js')
const Patient =require( '../models/patientModel.js')
const Doctor =require( '../models/doctorModel.js')
const generateToken =require('../utils/generateToken.js')
const {hospitalLoginSchema,
hospitalRegistrationSchema} = require('../auth/schemas/hospitalSchema.js')
const expressAsync = require("express-async-handler")


const login = expressAsync(async(req,res)=>{
    try{
        // const {email,password}=req.body
        // const admin=await Hospital.findOne({email})
        // if(admin &&  admin.password==password){
        //     const jwtToken= generateToken(admin._id);
        //     res.json({
        //         _id:admin._id,
        //         name:admin.name,
        //         email:admin.email,
        //         jwtToken:jwtToken
                
        //     })
        // }else{
        //     res.status(401)
        //     throw new Error('Invalid email or password')
        // }

        // Input Validation

        const { success , data } = hospitalLoginSchema.safeParse(req.body);
        
        if (!success) {
            return res.status(400).json({
                error: "Invalid request body"
            })
        }

        const { email, password } = data;
        const admin = await Hospital.findOne({ email });

        //checking the password
        const validPassword = await bcrypt.compare(password, admin.password);

        if (!validPassword || !admin) {
            return res.status(401).json({
                error: "Incorrect username or password"
            })
        }

        const jwtToken = generateToken(admin._id);
        res.status(200).json({
            _id:admin._id,
            name:admin.name,
            email:admin.email,
            jwtToken:jwtToken
        })


    }catch(e){
        res.status(500).send(e)
    }
})

 const register=expressAsync(async(req,res)=>{
    console.log("register start");
    try{
        // const {  name,email, address, pincode, password}=req.body
        // console.log(name,email, address, pincode, password);

        const { success , data } = hospitalRegistrationSchema.safeParse(req.body);
        
        if (!success) {
            return res.status(400).json({
                error: "Invalid request body"
            })
        }

        const {
            name,
            email,
            address,
            pincode,
            password
        } = data

        // hashing the password
        const salt = await bcrypt.genSalt(); // adding salt
        const hashedPassword = await bcrypt.hash(password, salt); // hashing the password using salt

        const hospitalExists = await Hospital.findOne({name})
        if ( hospitalExists ) {
            console.log("found already");
            res.status(400)
            throw new Error('hospital already exists')
        }
        const hospital=await Hospital({
            name,email, address, pincode, password: hashedPassword          
        }) // added hashedPassword
        console.log("created!");
        console.log(hospital)
        
        const saved= await hospital.save();

        if(saved){
            console.log("saved")
            const jwtToken =  generateToken(hospital._id)
            res.status(200)
            res.json({
                _id:hospital._id,
                name:hospital.name,
                address:hospital.address,
                jwtToken:jwtToken
            })
        } else {
            console.log("not saved")
        }
    }
    catch(e){
        res.status(500).send(e)
    }
})

const getAlldoctors=expressAsync(async(req,res)=>{
    try{
        const {hospital_id}=req.body

        const doctors=await Hospital.findById(hospital_id).doctors;
        res.json(doctors)
    }catch(e){
        res.status(500).send
    }
})

const getHospitalDetails=expressAsync(async(req,res)=>{
    try{

        const hospital=await Hospital.findById(req.body.hospital_id)
        res.json(hospital)
    }catch(e){
        res.status(500).send
    }
})

const getAllHospitals=expressAsync(async(req,res)=>{
    try{
        const hospitals=await Hospital.find({})
        res.json(hospitals)
    }catch(e){
        res.status(500).send
    }
})

const selectHospital=expressAsync(async(req,res)=>{
    try{
        const {hospital_id,patient_id}=req.body
        const patient=await Patient.findOneAndUpdate({_id:patient_id},{$push:{hospitals:hospital_id}})
        res.json(patient);
        
    }catch(e){
        res.status(500).send
    }
})


module.exports = {login,register,getAlldoctors,getAllHospitals,selectHospital,getHospitalDetails}





