import React, { useState } from 'react';
import axios from '../api/axios';

const AddDoctorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    qualifications: '',
    experience: '',
    profileImage: '',
    availableDays: [],
    availableTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Handle array input for availableDays
    if (name === 'availableDays') {
      const days = value.split(',').map((day) => day.trim());
      setFormData({ ...formData, availableDays: days });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/doctors', formData);
      console.log('Doctor added:', res.data);
      alert('Doctor added successfully!');
      setFormData({
        name: '',
        department: '',
        qualifications: '',
        experience: '',
        profileImage: '',
        availableDays: [],
        availableTime: '',
      });
    } catch (err) {
      console.error('Error adding doctor:', err);
      alert('Failed to add doctor');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md space-y-4"
    >
      <h2 className="text-xl font-bold">Add Doctor</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="border p-2 w-full"
        required
      />
      <input
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Department"
        className="border p-2 w-full"
        required
      />
      <input
        name="qualifications"
        value={formData.qualifications}
        onChange={handleChange}
        placeholder="Qualifications"
        className="border p-2 w-full"
      />
      <input
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        placeholder="Experience (years)"
        className="border p-2 w-full"
      />
      <input
        name="profileImage"
        value={formData.profileImage}
        onChange={handleChange}
        placeholder="Profile Image URL"
        className="border p-2 w-full"
      />
      <input
        name="availableDays"
        value={formData.availableDays.join(', ')}
        onChange={handleChange}
        placeholder="Available Days (comma-separated)"
        className="border p-2 w-full"
      />
      <input
        name="availableTime"
        value={formData.availableTime}
        onChange={handleChange}
        placeholder="Available Time"
        className="border p-2 w-full"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Doctor
      </button>
    </form>
  );
};

export default AddDoctorForm;
