import React, { useState, useEffect } from "react";
import axios from "axios";

const RegistrationForm = ({ changeMode }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [hospital, sethospital] = useState("");
  const [day, setDay] = useState("");

  const options = [
    { label: "ENT", value: "ENT" },
    { label: "Ortho", value: "Ortho" },
    { label: "Neuro", value: "Neuro" },
    { label: "Pediatrics", value: "Pediatrics" },
    { label: "Cardio", value: "Cardio" },
    { label: "Pulmonary", value: "Pulmonary" },
    { label: "Dental", value: "Dental" },
    { label: "Gynecology", value: "Gynecology" },
    { label: "Dermatology", value: "Dermatology" },
    { label: "Psychiatry", value: "Psychiatry" },
  ];

  useEffect(() => {
    sethospital(localStorage.getItem("hospital"));
  }, []);

  const handleProceed = () => {
    alert("hitting button");
    const userJWT = localStorage.getItem("userJWT");
    // hit api
    const sendToTokenController = async () => {
      alert("about to send request to server");
      await axios
        .post("http://localhost:8008/user/allot_token_number", {
          userJWT,
          appointmentType: selectedOption,
          severity: 3,
          day,
        })
        .then((res) => console.log("res", res));
    };

    sendToTokenController();
    // run the changes
    changeMode("landing");
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="flex flex-col gap-3 mt-10">
      <h1 className="font-bold">REGISTRATION FORM</h1>
      <h2 className="font-bold">(पंजीकरण)</h2>
      <div className="self-start flex flex-col p-10 w-4/5 m-auto">
        <div className="dropdown self-start">
          <p className="font-bold">Appointment Type/नियुक्ति प्रकार</p>
          <select
            value={selectedOption}
            onChange={(e) => handleSelect(e.target.value)}
            className="px-10 py-3 rounded-full bg-slate-200 border-2 border-black"
          >
            <option value="">Select an option</option>
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-10 dropdown self-start">
          <p className="font-bold">Day</p>
          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="px-10 py-3 rounded-full bg-slate-200 border-2 border-black"
          >
            <option value="">Select a day</option>
            <option value={"today"}>Today</option>
            <option value={"tomorrow"}>Tomorrow</option>
          </select>
        </div>

        <div className="self-start w-full text-left mt-5">
          <p className="font-bold">Symptoms/लक्षण</p>
          <div className="flex flex-col gap-3 w-full">
            <label className="italic font-medium">Describe your symptoms</label>
            <textarea
              className="border-1 border-slate-800 rounded-3xl p-3"
              width={300}
              height={200}
            ></textarea>
          </div>
        </div>
      </div>
      <button
        onClick={handleProceed}
        className=" bg-green-500 text-black font-medium text-xl self-center px-5 py-2 rounded-xl"
      >
        Proceed
      </button>
    </div>
  );
};

export default RegistrationForm;
