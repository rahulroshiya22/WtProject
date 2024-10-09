// src/components/PatientDetail.js

import React, { useState } from 'react';

const PatientDetail = ({ patient, updatePatient, deletePatient }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(patient.name);
  const [age, setAge] = useState(patient.age);
  const [contactNo, setContactNo] = useState(patient.contactNo);
  const [admitDate, setAdmitDate] = useState(patient.admitDate);
  const [bloodGroup, setBloodGroup] = useState(patient.bloodGroup);

  const handleEdit = () => {
    updatePatient(patient.id, { id: patient.id, name, age, contactNo, admitDate, bloodGroup });
    setIsEditing(false);
  };

  return (
    <div className="patient-detail">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            type="text"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
          />
          <input
            type="datetime-local"
            value={admitDate}
            onChange={(e) => setAdmitDate(e.target.value)}
          />
          <input
            type="text"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
          />
          <button onClick={handleEdit}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <h3>{patient.name}</h3>
          <p>Age: {patient.age}</p>
          <p>Contact No: {patient.contactNo}</p>
          <p>Admit Date & Time: {new Date(patient.admitDate).toLocaleString()}</p>
          <p>Blood Group: {patient.bloodGroup}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deletePatient(patient.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default PatientDetail;
