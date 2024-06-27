import React from "react";

const AddPrescriptionCard = () => {
  return (
    <div className="flex flex-col items-center justify-center m-auto">
      <img
        src="/add prescription.png"
        className="mt-20"
        alt="Add Prescription"
      />
      <h3 className="mt-5">Your All Prescriptions</h3> {/* Adjusted margin */}
      <p>A detailed past prescription helps the doctor to diagnose better.</p>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Add Prescription
      </button>
    </div>
  );
};

export default AddPrescriptionCard;
