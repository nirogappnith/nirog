const express = require('express')
const {registerUser, currentUser, loginUser, sendOTP, verifyOTP,dones, addHospital} = require('../controllers/patientController')
const { model } = require('mongoose')
const {makeToken, allotTimeSlots} = require('../controllers/tokenController')

const router = express.Router()
router.route('/login/').post(verifyOTP, loginUser)
router.route('/sendOTP').post(sendOTP)
router.route('/register/').post(verifyOTP, registerUser)
router.route('/current/').post(currentUser)
router.route('/allot_token_number/').post(makeToken)
router.route('/dones').post(dones)
router.route('/allot_time').post(allotTimeSlots)
router.route('/add_hospital').post(addHospital)

module.exports = router