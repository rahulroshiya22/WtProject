// src/components/PatientList.js

import React from 'react';
import PatientDetail from './PatientDetail';

const PatientList = ({ patients, updatePatient, deletePatient }) => {
  return (
    <div>
      <h2>Patient List</h2>
      {patients.length === 0 ? (
        <p>No patients found</p>
      ) : (
        patients.map((patient) => (
          <PatientDetail
            key={patient.id}
            patient={patient}
            updatePatient={updatePatient}
            deletePatient={deletePatient}
          />
        ))
      )}
    </div>
  );
};

export default PatientList;
