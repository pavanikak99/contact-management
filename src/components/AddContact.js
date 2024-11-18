import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import  { useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { Container, TextField, Box } from '@mui/material';
import { AddCircleOutline, Login } from '@mui/icons-material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';


function AddContact({ onAddContact }) {
  const navigate = useNavigate();
  const [contact, setContact] = useState({ Firstname: '', Lastname: '' ,Email: '', Phonenumber: '' ,Company:'',JobTitle:''});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // onAddContact(contact);  // Add the contact to the parent component
    // navigate('/');  // Navigate back to the home page

    try {
        // Send contact data to the backend
        const response = await axios.post('http://localhost:5000/contacts', contact);
    
        if (response.status === 201) {
          // Notify the parent component about the new contact
        //   onAddContact(response.data);
          // Navigate back to the home page
          navigate('/');
        } else {
          console.error('Error adding contact:', response);
        }
      } catch (error) {
        console.error('Error adding contact:', error);
      }
  };
  


  return (
    <>
    <AppBar position="static">
                <Toolbar>
                  <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Contact Management
                  </Typography>
                  <Button color="inherit" component={Link} to="/">
                    Contacts
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={<AddCircleOutline />}
                    component={Link}
                    to=""
                  >
                    Add
                  </Button>
                  <IconButton color="inherit" component={Link} to="/signin">
                    {/* <Login /> */}
          
                  </IconButton>
                </Toolbar>
              </AppBar>
    <Container>
      <Typography variant="h4" gutterBottom>Add Contact</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Firstname"
          name="Firstname"
          value={contact.Firstname}
          onChange={handleChange}
          variant="outlined"
          required
        />
         <TextField
          label="Lastname"
          name="Lastname"
          value={contact.Lastname}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="Email"
          name="Email"
          value={contact.Email}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <TextField
          label="Phonenumber"
          name="Phonenumber"
          value={contact.Phonenumber}
          onChange={handleChange}
          variant="outlined"
          required
        />
         <TextField
          label="Company"
          name="Company"
          value={contact.Company}
          onChange={handleChange}
          variant="outlined"
          required
        />
         <TextField
          label="JobTitle"
          name="JobTitle"
          value={contact.JobTitle}
          onChange={handleChange}
          variant="outlined"
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Add Contact
        </Button>
      </Box>
    </Container>
    </>
  );
}

export default AddContact;

