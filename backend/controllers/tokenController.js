const Patient = require("../models/patientModel");
const Hospital = require("../models/hospitalModel");
const Doctor = require("../models/doctorModel");
const generateToken = require("../utils/generateToken");
const jwt = require("jsonwebtoken");
const expressAsyncHandler = require("express-async-handler");

const makeToken = async (req, res) => {
  try {
    console.log("hitting token route");
    const { userJWT, severity, appointmentType, day } = req.body;
    console.log("appointment tpye asked for: ", appointmentType);
    const payload = jwt.decode(userJWT);
    const patient = await Patient.findOne({ _id: payload.id });

    const useremail = patient.email;
    console.log(useremail, severity, appointmentType, day);

    console.log("patient", patient);
    const hospitalId = patient.hospitals[patient.hospitals.length - 1];

    console.log("hopspital ", hospitalId);

    const currentHospital = await Hospital.findOne({ _id: hospitalId });
    console.log("current: ", currentHospital);

    const currentDept = currentHospital[appointmentType];
    console.log(currentDept);

    const seniorId = currentHospital[appointmentType].senior.doctorId;
    const juniorId = currentHospital[appointmentType].junior.doctorId;

    console.log("ids: ", seniorId, juniorId);

    let seniorDoctor = await Doctor.findOne({ _id: seniorId });
    console.log("senior doctor: ", seniorDoctor);
    let juniorDoctor = await Doctor.findOne({ _id: juniorId });
    console.log("jr doctor: ", juniorDoctor);

    if (day == "today") {
      if (severity >= 3) {
        if (seniorDoctor.today.length >= 28) {
          if (seniorDoctor.tomorrow.length >= 28) {
            res.json("No slots available for today and Tomorrow");
          } else {
            seniorDoctor.tomorrow.push(patient._id);
            const token = senior.tomorrow.length;
            // assigning the doctor
            patient.DoctorAssigned = seniorId;

            patient.curToken = `Tom${token}`;
            await patient.save();
            await seniorDoctor.save();
            res
              .status(200)
              .json(
                (token = `Tom${token}`),
                (DoctorAssigned = `Dr.${seniorDoctor.name}`),
              );
          }
        } else {
          seniorDoctor.today.push(patient._id);
          const token = seniorDoctor.today.length;
          patient.DoctorAssigned = seniorId;
          patient.curToken = `Tod${token}`;

          // saving the data
          await patient.save();
          await seniorDoctor.save();
          res
            .status(200)
            .json({
              token: `Tod${token}`,
              DoctorAssigned: `Dr.${seniorDoctor.name}`,
            });
        }
      } else {
        if (juniorDoctor.today.length >= 28) {
          if (juniorDoctor.tomorrow.length >= 28) {
            res.json("No slots available for today and Tomorrow");
          } else {
            juniorDoctor.tomorrow.push(patient._id);
            const token = juniorDoctor.tomorrow.length;
            patient.DoctorAssigned = juniorId;
            patient.curToken = `Tod${token}`;

            // saving the data
            await patient.save();
            await juniorDoctor.save();
            res
              .status(200)
              .json(
                (token = `Tod${token}`),
                (DoctorAssigned = `Dr.${juniorDoctor.name}`),
              );
          }
        } else {
          juniorDoctor.today.push(patient._id);
          const token = juniorDoctor.today.length;
          patient.DoctorAssigned = juniorId;
          patient.curToken = `Tod${token}`;

          // saving the data
          await patient.save();
          await juniorDoctor.save();
          res
            .status(200)
            .json(
              (token = `Tod${token}`),
              (DoctorAssigned = `Dr.${juniorDoctor.name}`),
            );
        }
      }
    } else if (day == "tomorrow") {
      if (severity >= 3) {
        if (seniorDoctor.tomorrow.length >= 28) {
          res.json("No slots available for today and Tomorrow");
        } else {
          seniorDoctor.tomorrow.push(patient._id);
          const token = seniorDoctor.tomorrow.length;
          patient.DoctorAssigned = seniorId;
          patient.curToken = `Tom${token}`;

          //saving the data
          await patient.save();
          await seniorDoctor.save();
          res
            .status(200)
            .json(
              (token = `Tom${token}`),
              (DoctorAssigned = `Dr.${seniorDoctor.name}`),
            );
        }
      } else {
        if (juniorDoctor.tomorrow.length >= 28) {
          res.json("No slots available for today and Tomorrow");
        } else {
          juniorDoctor.tomorrow.push(patient._id);
          const token = junior.tomorrow.length;
          patient.DoctorAssigned = juniorId;
          patient.curToken = `Tom${token}`;

          // saving the data
          await patient.save();
          await juniorDoctor.save();
          res
            .status(200)
            .json(
              (token = `Tom${token}`),
              (DoctorAssigned = `Dr.${juniorDoctor.name}`),
            );
        }
      }
    }
  } catch (e) {
    console.log("error:", e);
    res.status(500).send(e);
  }
};

const allotTimeSlots = expressAsyncHandler(async (req, res) => {
  const { token, userJWT } = req.params;
  const day = "";
  if (token.slice(0, 3) == "tod") {
    day = "today";
  } else {
    day = "tomorrow";
  }

  const userID = jwt.decode(userJWT);
  const user = await Patient.findOne({ _id: userID });
  const doctorID = user.DoctorAssigned;
  const doctor = await Doctor.findOne({ _id: doctorID });
  const docQueueLength = doctor.today.length;

  const tokenNum = token.slice(2, token.length);
  if (day == "tomorrow") {
    const timeSlotIntervalFrom9am = 15 * tokenNum;
  } else {
    const existingSlotTime = 15 * docQueueLength;
  }
});

module.exports = { makeToken, allotTimeSlots };
