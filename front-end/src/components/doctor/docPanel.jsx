import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode'


const DoctorPanel = () => {
  const [doctorDetails, setDoctorDetails] = useState({
    name: '',
    experience: "",
    email: '',
    mobile: '',
    specialization: "",
  });
  const [patients, setPatients] = useState([
    { name: 'Patient 1', curToken: 'TOD3', done: false, diagnosis: '', },
    { name: 'Patient 2', curToken: 'TOD4', done: true, diagnosis: '', },
    // Add more patients as needed
  ]);

  const getPatients = async (doctor_id) => {
    try {
      const response = await fetch('https://the-trailblazers.onrender.com/doctor/getPatients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ doctor_id: doctor_id }),
      });
      const data = await response.json();
      console.log('Patients:', data);
      setPatients(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  


  const getDoctorDetails = async (doctor_id) => {
    try {
      const response = await fetch('https://the-trailblazers.onrender.com/doctor/getDoctor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ doctor_id }),
      });
      const data = await response.json();
      console.log('Doctor Details:', data);
      setDoctorDetails(data);

    } catch (error) {
      console.error('Error:', error);
    }
  };
    

  useEffect(() => {
    const docJWT = localStorage.getItem('docJWT');
    if (!docJWT) {
      window.location.href = '/doctor/login';
    } else {
      const payload = jwtDecode(docJWT);

      console.log('Payload:', payload);
      const doctorId = payload.id;

      getDoctorDetails(doctorId);
      getPatients(doctorId);

      }
  }, []);





  

  const handleFileUpload = (e, index) => {
    // Add file upload logic here for a specific patient
    const file = e.target.files[0];
    console.log(`Uploaded file for ${patients[index].name}:`, file);
  };

  const handlePatientDone = (index) => {
    // Toggle the done status of the patient
    const updatedPatients = [...patients];
    updatedPatients[index].done = !updatedPatients[index].done;
    setPatients(updatedPatients);
  };

  const handleDiagnosisChange = (e, index) => {
    // Update the diagnosis for a specific patient
    const updatedPatients = [...patients];
    updatedPatients[index].diagnosis = e.target.value;
    setPatients(updatedPatients);
  };

  const handleDeletePatient = (index) => {
    // Delete a specific patient
    const updatedPatients = [...patients];
    updatedPatients.splice(index, 1);
    setPatients(updatedPatients);
  };
  const handleOFF = async () => {
    try {
      const docJWT = localStorage.getItem('docJWT');

      const response = await fetch('https://the-trailblazers.onrender.com/doctor/doneForToday', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jwtToken: docJWT }),
      });
      const data = await response.json();
      console.log('Done for today:', data);
      window.location.href = '/doctor/login';
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Doctor Details */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Doctor Details</h2>
        <p>
          <span className="font-bold">Name:</span> {doctorDetails.name}
        </p>
        <p>
          <span className="font-bold">Experience:</span> {doctorDetails.experience}
        </p>
        <p>
          <span className="font-bold">Email:</span> {doctorDetails.email}
        </p>
        <p>
          <span className="font-bold">Mobile:</span> {doctorDetails.mobile}
        </p>
        <p>
          <span className="font-bold">Specialisation:</span> {doctorDetails.specialization}
        </p>
      </div>

      {/* Patient Table */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Patient List</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Token</th>
              <th className="px-4 py-2">Done</th>
              <th className="px-4 py-2">Diagnosis</th>
              <th className="px-4 py-2">File Upload</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{patient.name}</td>
                <td className="border px-4 py-2">{patient.token}</td>
                <td className="border px-4 py-2">
                  <input
                    type="checkbox"
                    checked={patient.done}
                    onChange={() => handlePatientDone(index)}
                  />
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="text"
                    value={patient.diagnosis}
                    onChange={(e) => handleDiagnosisChange(e, index)}
                    className="border p-1 w-full"
                    placeholder="Diagnosis"
                  />
                </td>
                <td className="border px-4 py-2">
                  <input type="file" onChange={(e) => handleFileUpload(e, index)} />
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => handleDeletePatient(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleOFF}  type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Done For today</button>

    </div>
  );
};

export default DoctorPanel;
