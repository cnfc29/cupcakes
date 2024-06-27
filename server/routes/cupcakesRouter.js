const cupcakesRouter = require('express').Router();
require('dotenv').config();

const { Cupcake } = require('../db/models');

cupcakesRouter.get('/', async (req, res) => {
  try {
    const cupcakes = await Cupcake.findAll();
    res.json(cupcakes);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

module.exports = cupcakesRouter;
