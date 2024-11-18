import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navigate() {
  const navigate = useNavigate();

  const goToAddContact = () => {
    navigate('/add-contact'); // Programmatically navigate to "/add-contact"
  };

  return <button onClick={goToAddContact}>Go to Add Contact</button>;
}

export default Navigate;
