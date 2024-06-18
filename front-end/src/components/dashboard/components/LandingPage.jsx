import React, { useEffect, useState } from "react";
import axios from "axios";
import "../page.css";

const LandingPage = ({ changeMode }) => {
  const [patientDetails, setPatientDetails] = useState({});
  const [doctor, setDoctor] = useState({});

  useEffect(() => {
    const jwtToken = localStorage.getItem("userJWT");
    if (!jwtToken) {
      window.location.href = "/login";
    }

    const fetchData = async () => {
      await axios
        .post("http://localhost:8008/user/current/", { jwtToken })
        .then((res) => {
          const patientDetails = res.data.patient;
          console.log("patientDetails: ", patientDetails);
          setPatientDetails(patientDetails);
        });

      console.log(patientDetails);

      await axios
        .post("https://localhost:8008/doctor/getDoctor/", {
          doctor_id: patientDetails.DoctorAssigned,
        })
        .then((res) => {
          console.log("response from get doctor: ", res);
          setDoctor(res.data);
        });
    };

    fetchData();
  }, []);

  const callerbot = () => {
    const res = fetch("http://127.0.0.1:5000/callget", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const cardDivClasses = "border p-3 rounded bg-zinc-100/40";

  return (
    // <div className="flex flex-col gap-4 w-full mt-3 font-poppins p-3 overflow-x-hidden">
    //   <div className="flex gap-3 items-center p-4 bg-gray-300/20 rounded">
    //     <img src="/profile.png" className="w-20 sm:w-32" />
    //     <div className="flex flex-col items-start sm:flex-row text-lg sm:text-3xl lg:text-4xl justify-center sm:items-center font-poppins gap-2">
    //       <p className="m-0">Welcome Back, </p>
    //       <p className="m-0 font-bold ">Mehul</p>
    //     </div>
    //   </div>
    //   {/* <div className="flex w-full justify-evenly items-center mt-3">
    //     <img src="./doctors.png" className="hidden sm:flex w-full sm:max-w-96"/>
    //     <div className="flex flex-col text-xl sm:text-base lg:text-2xl xl:text-3xl space-y-3 w-full sm:max-w-10/12">
    //       <p className="font-bold text-blue-400 m-0">
    //         NOT FEELING WELL ?
    //       </p>
    //       <div className="flex justify-end">
    //         <button
    // className="bg-[#2e90f5]  text-white font-semibold px-3 py-1 rounded-md"
    // onClick={() => changeMode("hospitalSelect")}
    //         >
    //           BOOK APPOINTMENT
    //         </button>
    //       </div>
    //     </div>
    //   </div> */}
    //   <div className="flex p-10 flex-col w-full gap-5 items-start">
    //     <h1>Upcoming Appointments</h1>
    //     {/* <table className="w-full border-2 border-spacing-2 border-collapse">
    //       <thead>
    //         <tr className="text-xl">
    //           <th className="border-2 border-slate-400">Doctor</th>
    //           <th className="border-2 border-slate-400">Token No</th>
    //           <th className="border-2 border-slate-400">Date</th>
    //           <th className="border-2 border-slate-400">Time</th>
    //         </tr>
    //       </thead>
    //       <tr>
    //         <td className="border-2 border-slate-400">John Doe</td>
    //         <td className="border-2 border-slate-400">Tod4</td>
    //         <td className="border-2 border-slate-400">10 Mar 2024</td>
    //         <td className="border-2 border-slate-400">10 a.m.</td>
    //       </tr>
    //     </table> */}
    //   </div>
    // <div
    //   onClick={callerbot}
    //   className="fixed bottom-8 flex hover:scale-110 hover:shadow-lg duration-100 items-center justify-center right-8 rounded-full w-20 h-20 bg-green-500"
    // >
    //   <img src="/chatbot.png" width={85} />
    // </div>
    // </div>
    <div className="flex flex-col h-full w-full p-6 md:py-10 md:px-0 gap-8 font-inter">
      <div className="flex flex-col gap-4 px-6">
        <div className="flex">
          <img src="/profile.png" className="w-20 sm:w-32" />
          <h1 className="text-2xl font-bold sm:text-4xl flex items-end m-0 p-0">
            Welcome back, Username!
          </h1>
        </div>
        <p className="text-gray-500  text-base= sm:text-xl">
          Here are your upcoming appointments.
        </p>
      </div>
      <div className="flex flex-col gap-4 mb-24 border-t rounded-t-3xl p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className={cardDivClasses}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">Dr. Abc</div>
                <div className="text-sm text-gray-500 ">June 20, 2024</div>
              </div>
              <div className="text-gray-500 ">10:00 AM - 11:00 AM</div>
              <div className="text-gray-500 ">General Checkup</div>
            </div>
          </div>
          <div className={cardDivClasses}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">Dr. Def</div>
                <div className="text-sm text-gray-500 ">June 25, 2024</div>
              </div>
              <div className="text-gray-500 ">2:00 PM - 3:00 PM</div>
              <div className="text-gray-500 ">Dental Cleaning</div>
            </div>
          </div>
          <div className={cardDivClasses}>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="font-medium">Dr. Ghi</div>
                <div className="text-sm text-gray-500 ">July 5, 2024</div>
              </div>
              <div className="text-gray-500 ">9:00 AM - 10:00 AM</div>
              <div className="text-gray-500 ">Flu Shot</div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-600 text-white py-1 px-3 rounded"
            onClick={() => changeMode("hospitalSelect")}
          >
            Book Appointment
          </button>
        </div>
      </div>
      <div
        onClick={callerbot}
        className="fixed bottom-2 flex hover:shadow-lg duration-100 items-center justify-center right-2 rounded-full w-20 h-20 bg-blue-500 "
      >
        <img src="/chatbot.png" width={85} className="text-white" />
      </div>
    </div>
  );
};

export default LandingPage;
