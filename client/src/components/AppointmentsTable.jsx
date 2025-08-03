import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const AppointmentsTable = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get('/appointments')
      .then((res) => setAppointments(res.data))
      .catch((err) => console.error('Error fetching appointments:', err));
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow-md mt-8">
      <h2 className="text-xl font-bold mb-4">Appointments</h2>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appt) => (
            <tr key={appt._id}>
              <td className="p-2 border">{appt.name}</td>
              <td className="p-2 border">{appt.date}</td>
              <td className="p-2 border">{appt.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
