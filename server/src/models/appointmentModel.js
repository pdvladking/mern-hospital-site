import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema(
  {
    patientName: String,
    email: String,
    phone: String,
    department: String,
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    appointmentDate: Date,
    message: String,
  },
  { timestamps: true }
);

export default mongoose.model('Appointment', appointmentSchema);
