import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    department: {
      type: String,
      required: true,
    },
    qualifications: {
      type: String,
    },
    experience: {
      type: Number, // in years
    },
    profileImage: {
      type: String, // URL or file path for doctor photo
    },
    availableDays: {
      type: [String], // e.g., ['Monday', 'Wednesday', 'Friday']
    },
    availableTime: {
      type: String, // e.g., '10:00 AM - 4:00 PM'
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

export default mongoose.model('Doctor', doctorSchema);
