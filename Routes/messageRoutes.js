const express = require('express');
const Message = require('../modelsFolder/Message'); // Adjust the path based on your project structure
const router = express.Router();

// Middleware to parse JSON payloads
router.use(express.json());

// Route to get all potions
router.get('/', async (req, res) => {
 try {
   const messages = await Messages.find();
   res.status(200).json(messages);
 } catch (err) {
   res.status(500).json({ message: err.message });
 }
});

// Route to add a new potion
router.post('/', async (req, res) => {
 const { name, email, note } = req.body;

 // Validate required fields
 if (!name || !email || !note ) {
   return res.status(400).json({ message: 'Please provide name, price, and description' });
 }

 const message = new Message ({
   name,
   email,
   note,

 });

 try {
   const savedMessage = await message.save();
   res.status(201).json(savedMessage);
 } catch (err) {
   res.status(400).json({ message: err.message });
 }
});

module.exports = router;


