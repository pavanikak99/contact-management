import logo from './logo.svg';
import './App.css';
import React from 'react';
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AddContact from './components/AddContact';



const App=()=> {
  const [contacts,setContacts]=useState([]);
  const handleAddContact=(newContact)=>{
    setContacts((prevContacts) => [...prevContacts,newContact]);
  };
  <AddContact onAddContact={handleAddContact}/>
  useEffect(() => {
    axios.get('http://localhost:5000/contacts')
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      
      <Router>
      <Routes>
         <Route path="/" element={<Home />} />
        <Route path="src/components/AddContact.js" element={<AddContact />} /> 
         
        {/* <Route path="/signin" element={<SignIn />} /> */}
      </Routes>
    </Router>
    </div>
  );
};

export default App;
