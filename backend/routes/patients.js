// backend/routes/patients.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Create
router.post('/', (req, res) => {
  const { name, age, disease } = req.body;
  db.query('INSERT INTO patients SET ?', { name, age, disease }, (err, result) => {
    if (err) throw err;
    res.send('Patient added');
  });
});

// Read
router.get('/', (req, res) => {
  db.query('SELECT * FROM patients', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Update
router.put('/:id', (req, res) => {
  const { name, age, disease } = req.body;
  db.query(
    'UPDATE patients SET ? WHERE id = ?',
    [{ name, age, disease }, req.params.id],
    (err) => {
      if (err) throw err;
      res.send('Patient updated');
    }
  );
});

// Delete
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM patients WHERE id = ?', [req.params.id], (err) => {
    if (err) throw err;
    res.send('Patient deleted');
  });
});

module.exports = router;
