import React, { useState } from "react";
import "./Login.css"; // Make sure to create a corresponding CSS file
import axios from "axios";

const LoginForm = () => {
  const [open, setOpen] = useState(false);
  const [otp, setOtp] = useState(0);
  const [formDetails, setFormDetails] = useState(null);

  const handleSendOTP = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObj = {
      name: formData.get("name"),
      age: formData.get("age"),
      dob: formData.get("dob"),
      sex: formData.get("sex"),
      mobile: formData.get("mobile"),
      email: formData.get("email"),
    };
    console.log(formObj);
    setFormDetails(formObj);

    const sendOTP = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8008/user/sendOTP",
          {
            ...formObj,
            isRegistered: false,
          },
        );
        console.log("otp sending response: ", response);
        alert("OTP sent");
        setOpen(!open); // Only set open state if OTP sent successfully
      } catch (error) {
        console.error("Error sending OTP: ", error);
        alert("Failed to send OTP. Please try again.");
      }
    };
    sendOTP();
    console.log("sentOTP");
  };

  const handleVerify = (e) => {
    e.preventDefault();
    alert(`OTP you entered is ${otp}`);

    const registerUser = async () => {
      try {
        console.log(formDetails);
        const res = await axios.post("http://localhost:8008/user/register/", {
          ...formDetails,
          otp,
        });
        if (res.status === 201) {
          console.log("res after register: ", res);
          const token = res.data.token;
          console.log("received token: ", token);
          localStorage.setItem("userJWT", token);
          console.log("set jwt");
          window.location.href = "/myDashboard";
        } else {
          alert("Registration failed.");
        }
      } catch (error) {
        console.error("Error during registration: ", error);
        alert("Registration failed. Please try again.");
      }
    };
    registerUser();
  };

  return (
    <div className=" bg-[#72B3BE] min-h-screen overflow-hidden login-container text-center justify-center p-0 align-center font-inter">
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">OTP Verification</h2>
            <p className="mb-4">
              Please enter the OTP sent to your email & ContactNo:
            </p>
            <input
              className="mb-4 p-2 w-32 text-center border-2 border-gray-300 rounded"
              type="text"
              value={otp}
              name="otp"
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
            <br />
            <button
              onClick={handleVerify}
              className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
            >
              Submit
            </button>
            <button
              onClick={() => setOpen(false)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-row w-screen h-screen m-auto p-0 items-center justify-center">
        <form className="login-form " onSubmit={handleSendOTP}>
          <h1 className="headings">Signup</h1>
          <input
            className="border px-2 rounded input-field" // Added custom class 'input-field'
            type="text"
            placeholder="Name"
            required
            name="name"
          />
          <input
            className="border px-2 rounded input-field" // Added custom class 'input-field'
            type="number"
            required
            placeholder="Age"
            name="age"
          />
          <input
            className="border px-2 rounded input-field" // Added custom class 'input-field'
            type="date"
            placeholder="Date of Birth"
            required
            name="dob"
          />
          <select
            className="border px-2 rounded input-field" // Added custom class 'input-field'
            placeholder="Sex"
            required
            name="sex"
          >
            <option value="">Select </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <input
            className="border px-2 rounded input-field" // Added custom class 'input-field'
            type="tel"
            placeholder="Mobile Number"
            required
            name="mobile"
          />
          <input
            className="border px-2 rounded input-field" // Added custom class 'input-field'
            type="email"
            placeholder="Email"
            required
            name="email"
          />
          <button
            onSubmit={handleSendOTP}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
