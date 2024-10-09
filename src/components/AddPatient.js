// src/components/AddPatient.js

import React, { useState } from 'react';

const AddPatient = ({ addPatient }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [admitDate, setAdmitDate] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [id, setId] = useState(Date.now());

  const handleSubmit = (e) => {
    e.preventDefault();
    addPatient({ id, name, age, contactNo, admitDate, bloodGroup });
    setName('');
    setAge('');
    setContactNo('');
    setAdmitDate('');
    setBloodGroup('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Contact No"
        value={contactNo}
        onChange={(e) => setContactNo(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        placeholder="Admit Date & Time"
        value={admitDate}
        onChange={(e) => setAdmitDate(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Blood Group"
        value={bloodGroup}
        onChange={(e) => setBloodGroup(e.target.value)}
        required
      />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default AddPatient;
