import jwt from 'jsonwebtoken';
import Doctor from '../models/Doctor.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Register new doc
export const registerDoctor = async (req, res) => {
  try {
    const { name, email, password, specialization } = req.body;
    const doctorExists = await Doctor.findOne({ email });
    if (doctorExists) return res.status(400).json({ error: 'Doctor already exits' });

    const doctor = await Doctor.create({ name, email, password, specialization });
    res.status(201).json({
      _id: doctor._id,
      name: doctor.name,
      email: doctor.email,
      specialization: doctor.specialization,
      token: generateToken(doctor._id)
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login doctor
export const loginDoctor = async (req, res) => {
  try {
    const { email, password } = req.body;
    const doctor = await Doctor.findOne({ email });

    if (doctor && (await doctor.matchPassword(password))) {
      res.json({
        _id: doctor._id,
        name: doctor.name,
        email: doctor.email,
        specialization: doctor.specialization,
        token: generateToken(doctor._id)
      });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};