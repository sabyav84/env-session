const { Router } = require('express');
const { addName } = require('../model/names.model');

const router = Router();

router.post('/name', async (req, res) => {
  const { name } = req.body;
  const result = await addName(name);
  res.status(200).json({ message: result });
});

module.exports = router;
