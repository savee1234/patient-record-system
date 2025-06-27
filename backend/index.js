// backend/index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const patientsRoutes = require('./routes/patients');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/patients', patientsRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
