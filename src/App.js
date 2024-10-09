// src/App.js

import React, { useState } from 'react';
import './App.css';
import AddPatient from './components/AddPatient';
import PatientList from './components/PatientList';

function App() {
  const [patients, setPatients] = useState([]);

  const addPatient = (patient) => {
    setPatients([...patients, patient]);
  };

  const updatePatient = (id, updatedPatient) => {
    setPatients(patients.map((patient) => (patient.id === id ? updatedPatient : patient)));
  };

  const deletePatient = (id) => {
    setPatients(patients.filter((patient) => patient.id !== id));
  };

  return (
    <div className="App">
      <h1>Patient Management System</h1>
      <AddPatient addPatient={addPatient} />
      <PatientList patients={patients} updatePatient={updatePatient} deletePatient={deletePatient} />
    </div>
  );
}

export default App;
