import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  diagnosis: { type: String },
  admittedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Patient', patientSchema);