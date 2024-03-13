import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';

const HospDash = () => {
  const [hospitalDetails, setHospitalDetails] = useState({
    name: '',
    address: '',
    pincode: '',
    patients: [],
    password: '',
    type: 'govt',
    ENT: {
      senior: {},
      junior: {},
    },
    Ortho: {
      senior: {},
      junior: {},
    },
    Neuro: {
      senior: {},
      junior: {},
    },
    Pediatrics: {
      senior: {},
      junior: {},
    },
    Cardio: {
      senior: {},
      junior: {},
    },
    Pulmonary: {
      senior: {},
      junior: {},
    },
    Dental: {
      senior: {},
      junior: {},
    },
    Gynecology: {
      senior: {},
      junior: {},
    },
    Dermatology: {
      senior: {},
      junior: {},
    },
    Psychiatry: {
      senior: {},
      junior: {},
    },
  });

  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState('');

  // Function to add a new doctor
  const addDoctor = () => {
    setDoctors([...doctors, newDoctor]);
    setNewDoctor('');
  };

  const getHospitalDetails = async (id) => {
    try {
      console.log('Hospital ID:', id);
      const response = await fetch(`https://the-trailblazers.onrender.com/admin/getHospitalDetails`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ hospital_id: id}),
      });
      const data = await response.json();
      console.log('Hospital Details:', data);
      console.log(data.name)
      setHospitalDetails(data);

    }
    catch (error) {
      console.error('Error:', error);
    }
  };
  



  useEffect(() => {
    // Fetch hospital details
    const hospital_id = localStorage.getItem('adminJWT');
    const payload = jwtDecode(hospital_id);
    const id = payload.id;
    console.log('Payload:', payload);
    console.log('Hospital ID:', id);
    getHospitalDetails(id);

    
    

    
  }, []);

  return (
    <div className="container mx-auto p-6">
      {/* Row 1: Hospital Details */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Hospital Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <span className="font-bold">Name:</span> {hospitalDetails.name}
          </p>
          <p>
            <span className="font-bold">Address:</span> {hospitalDetails.address}
          </p>
          <p>
            <span className="font-bold">Pincode:</span> {hospitalDetails.pincode}
          </p>
          <p>
            <span className="font-bold">Type:</span> {hospitalDetails.type}
          </p>
        </div>
      </div>

      {/* Row 2: Total Patients and Doctors */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Total Patients and Doctors</h2>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <span className="font-bold">Total Patients:</span> {hospitalDetails.patients.length}
          </p>
          <p>
            <span className="font-bold">Total Doctors:</span> {doctors.length}
          </p>
        </div>
      </div>

      {/* Row 3: All Doctors */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">All Doctors</h2>
        <div className="grid grid-cols-2 gap-4">
          {doctors.map((doctor, index) => (
            <p key={index}>{doctor}</p>
          ))}
        </div>
      </div>

      {/* Button to add a new doctor */}
      <div>
        <input
          type="textArea"
          value={newDoctor}
          onChange={(e) => setNewDoctor(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Enter Doctor's data here..."
        />
        <button
          onClick={addDoctor}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Add Doctor
        </button>
      </div>
    </div>
  );
};

export default HospDash;
