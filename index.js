const express = require('express');
const router = require('./routes');
// require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
