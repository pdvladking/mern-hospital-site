import React from 'react';
import AddDoctorForm from '../Components/AddDoctorForm';
import AppointmentsTable from '../components/AppointmentsTable';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <AddDoctorForm />
    </div>
  );
};

export default Admin;
