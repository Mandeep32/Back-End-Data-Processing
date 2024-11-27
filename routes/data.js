const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// Route to add data
router.post('/add', async (req, res) => {
  const { name, value } = req.body;
  const data = new Data({ name, value });
  try {
    await data.save();
    res.status(201).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Route to get all data
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;