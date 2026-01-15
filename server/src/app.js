import express from 'express';
import cors from 'cors';
import patientRoutes from './routes/patientRoutes';
import authRoutes from './routes/authRoutes';
import appointmentRoutes from './routes/appointmentRoutes';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/patients', patientRoutes);
app.use('/api/auth', authRoutes);
app.use('api/appointments', appointmentRoutes);

app.get('/', (req, res) => {
  res.send('Hospital backend is running ...');
});

export default app;