const express = require('express');
const bootDb = require('./model');
const router = require('./routes');
// require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use('/api', router);

(async () => {
  await bootDb();
  app.listen(port, () => {
    console.log(`Running on port ${port}`);
  });
})();
