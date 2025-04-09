const express = require('express');
const Potion = require('../modelsFolder/Potions'); // Adjust the path based on your project structure
const router = express.Router();

// Middleware to parse JSON payloads
router.use(express.json());

// Route to get all potions
router.get('/', async (req, res) => {
 try {
   const potions = await Potion.find();
   res.status(200).json(potions);
 } catch (err) {
   res.status(500).json({ message: err.message });
 }
});

// Route to add a new potion
router.post('/', async (req, res) => {
 const { name, price, description, imageURL } = req.body;

 // Validate required fields
 if (!name || !price || !description || !imageURL) {
   return res.status(400).json({ message: 'Please provide name, price, and description' });
 }

 const potion = new Potion({
   name,
   price,
   description,
   imageURL
 });

 try {
   const savedPotion = await potion.save();
   res.status(201).json(savedPotion);
 } catch (err) {
   res.status(400).json({ message: err.message });
 }
});

module.exports = router;
