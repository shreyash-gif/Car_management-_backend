const Car = require("../models/Car");

exports.createCar = async (req, res) => {
  try {
    const { title, description, tags } = req.body;
    const images = req.files.map(file => file.path); // Array of uploaded image URLs
    const newCar = new Car({ userId: req.user.id, title, description, tags, images });
    await newCar.save();

    res.status(201).json(newCar);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Implement similar controllers for updating, deleting, and searching cars.
