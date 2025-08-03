import { useEffect, useState } from 'react';
import axios from '../api/axios';

export default function DoctorList() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios
      .get('/doctors')
      .then((res) => setDoctors(res.data))
      .catch((err) => console.error('Fetch failed', err));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/doctors/${id}`);
      setDoctors((prev) => prev.filter((doc) => doc._id !== id));
    } catch (err) {
      console.error('Delete failed', err);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow space-y-4">
      <h2 className="text-xl font-bold">Doctor List</h2>
      {doctors.length === 0 ? (
        <p className="text-gray-500">No doctors added yet.</p>
      ) : (
        doctors.map((doc) => (
          <div
            key={doc._id}
            className="flex justify-between items-center border-b pb-2"
          >
            <div>
              <p className="font-semibold">{doc.name}</p>
              <p className="text-sm text-gray-600">{doc.department}</p>
            </div>
            <button
              onClick={() => handleDelete(doc._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
