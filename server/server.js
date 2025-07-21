import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import PatientRoutes from './routes/patientRoutes.js';
import DoctorRoutes from './routes/doctorRoutes.js';
import ContactRoutes from './routes/contactRoutes.js';
import AppointmentRoutes from './routes/appointmentRoutes.js';
import AuthRoutes from './routes/authRoutes.js';
import FAQRoutes from './routes/faqRoutes.js';

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/patients', PatientRoutes);
app.use('/api/doctors', DoctorRoutes);
app.use('/api/contact', ContactRoutes);
app.use('/api/appointments', AppointmentRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/faqs', FAQRoutes);
