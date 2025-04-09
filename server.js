const express = require('express');
const mongoose = require('mongoose');
const potionRoutes = require('./Routes/potionRoutes');
const messageRoutes = require('./Routes/messageRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // Use a different port than your React app

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
const mongoURI = 'mongodb+srv://ronaldlholt3:potions@potions.jhpzipu.mongodb.net/?retryWrites=true&w=majority&appName=Potions'; // **REPLACE THIS!**

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Backend connected to MongoDB'))
.catch(err => console.error('Backend error connecting to MongoDB:', err));

// Use the potion routes (mount them under the '/api' prefix)
app.use('/potions', potionRoutes);
app.use('/contact', messageRoutes); 

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});


// server.js or app.js (your server entry point)
// const express = require('express');
// const cors = require('cors'); // To handle cross-origin requests from the frontend
// const bodyParser = require('body-parser');
// const contactController = require('./controllers/contactController');

// Middleware
// app.use(cors());
// app.use(bodyParser.json()); // To parse JSON bodies

// Contact route
// app.post('/contact', contactController.handleContactForm);

