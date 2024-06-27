const express = require("express");
const {
  login,
  register,
  getAllHospitals,
  getAlldoctors,
  getHospitalDetails,
} = require("../controllers/hospitalController");

const router = express.Router();

router.route("/login").post(login);

router.route("/register").post(register);

router.route("/getHospital").get(getAllHospitals);

router.route("/getDoctors").get(getAlldoctors);

router.route("/getHospitalDetails").post(getHospitalDetails);

module.exports = router;
