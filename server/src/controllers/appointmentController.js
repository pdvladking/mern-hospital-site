import Appointment from "../models/Appointment";

// Create appointment
export const createAppointment = async (req, res) => {
  try {
    const { patient, doctor, date } = req.body;
    const appointment = await Appointment.create({ patient, doctor, date });
    res.status(201).json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all appointments
export const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
    .populate('patient', 'name age diagnosis')
    .populate('doctor', 'name email specialization');
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update appointment status
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.json(appointment);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};