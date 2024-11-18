const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // For parsing JSON data

// Connect to MySQL Database
const db = mysql.createConnection({
  host: 'localhost',   // MySQL server
  user: 'root',        // MySQL username
  password: 'pavanika@Mysql',        // MySQL password
  database: 'contact-management', // Your database name
  port: '3306'
});

// Connect to the database
db.connect((err) => {
  if (err) throw err;
  else{
    console.log('Connected to MySQL!');
  }
  
});

// POST /contacts: Add a new contact
app.post('/contacts', (req, res) => {
    const { firstname, lastname, email, phone, company, job_title } = req.body;
  
    // Basic validation
    if (!firstname || !lastname || !email || !phone || !company || !job_title) {
      return res.status(400).send({ error: 'All fields are required' });
    }
  
    const query = 'INSERT INTO contacts (firstname, lastname, email, phone, company, job_title) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [firstname, lastname, email, phone, company, job_title], (err, result) => {
      if (err) {
        console.error('Error executing query:', err); // This will print the error to the server log
        return res.status(500).send({ error: 'Failed to add contact' });
      }
      res.status(201).json({ message: 'Contact added successfully', contactId: result.insertId });
    });
  });
  

// GET /contacts: Retrieve all contacts
app.get('/contacts', (req, res) => {
  const query = 'SELECT * FROM contacts';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).send({ error: 'Failed to retrieve contacts' });
    }
    res.json(results); // Send data to the frontend
  });
});

// PUT /contacts/:id: Update a specific contact's information
app.put('/contacts/:id', (req, res) => {
  const contactId = req.params.id;
  const { firstname, lastname, email, phone, company, job_title } = req.body;

  const query = 'UPDATE contacts SET firstname = ?, lastname = ?, email = ?, phone = ?, company = ?, job_title = ? WHERE id = ?';
  db.query(query, [firstname, lastname, email, phone, company, job_title, contactId], (err, result) => {
    if (err) {
      return res.status(500).send({ error: 'Failed to update contact' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).send({ error: 'Contact not found' });
    }
    res.json({ message: 'Contact updated successfully' });
  });
});

// DELETE /contacts/:id: Delete a contact
app.delete('/contacts/:id', (req, res) => {
  const contactId = req.params.id;

  const query = 'DELETE FROM contacts WHERE id = ?';
  db.query(query, [contactId], (err, result) => {
    if (err) {
      return res.status(500).send({ error: 'Failed to delete contact' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).send({ error: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  });
});

// Start the Server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
