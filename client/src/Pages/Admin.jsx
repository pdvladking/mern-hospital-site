import React from 'react';
import AddDoctorForm from '../components/AddDoctorForm';
import DoctorList from '../components/DoctorList';

const Admin = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <AddDoctorForm />
      <DoctorList />
    </div>
  );
};

export default Admin;
