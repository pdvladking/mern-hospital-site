import Appointment from '../models/appointmentModel.js';

export const bookAppointment = async (req, res) => {
  try {
    const newAppt = new Appointment(req.body);
    await newAppt.save();
    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to book appointment' });
  }
};

export const getAppointments = async (req, res) => {
  try {
    const appts = await Appointment.find().populate('doctorId');
    res.status(200).json(appts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch appointments' });
  }
};
