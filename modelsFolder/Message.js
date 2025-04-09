const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: {
  type: String,
  },
  email: {
  type: String,
  },
  note: {
  type: String,
  }

});

module.exports = mongoose.model('Message', messageSchema);
