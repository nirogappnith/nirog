const express = require("express");
const doctorController = require("../controllers/doctorController");

const router = express.Router();

router.route("/login").post(doctorController.login);
router.route("/getDoctor").post(doctorController.getDoctor);

router.route("/register").post(doctorController.register);

router.route("/doneForToday").post(doctorController.doneForToday);

router.route("/getHosptial").post(doctorController.doneForToday);

router.route("/getPatients").post(doctorController.getPatients);

module.exports = router;
