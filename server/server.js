import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

// 🛠️ Route Imports
import PatientRoutes from './routes/patientRoutes.js';
import DoctorRoutes from './routes/doctorRoutes.js';
import ContactRoutes from './routes/contactRoutes.js';
import AppointmentRoutes from './routes/appointmentRoutes.js';
import AuthRoutes from './routes/authRoutes.js';
import FAQRoutes from './routes/faqRoutes.js';

dotenv.config();
const app = express();

// 🔄 Middleware
app.use(cors());
app.use(express.json());

// 🌐 API Routes
app.use('/api/patients', PatientRoutes);
app.use('/api/doctors', DoctorRoutes);
app.use('/api/contact', ContactRoutes);
app.use('/api/appointments', AppointmentRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/faqs', FAQRoutes);

// 🚦 Test Route
app.get('/', (req, res) => {
  res.send('✅ API is running');
});

// 🔌 MongoDB Connection + Server Boot
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
  });
