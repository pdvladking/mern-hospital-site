import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Patient from './models/Patient.js';
import PatientRoutes from './routes/patientRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/patients', PatientRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

app.get('/', (req, res) => {
  res.send('API is running');
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');

    const testPatient = new Patient({
      name: 'Raj Test',
      age: 24,
      gender: 'Male',
      diagnosis: 'Full-stack curiosity syndrome',
    });

    testPatient
      .save()
      .then(() => console.log('Test patient saved'))
      .catch((err) => console.error('Error saving patient:', err.message));

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB error:', err.message));
