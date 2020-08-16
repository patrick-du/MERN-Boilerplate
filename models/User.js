const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  provider: {
    type: String,
  },
  providerId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('User', UserSchema);
