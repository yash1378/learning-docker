"use client";
import React, { useState } from 'react';
import { Button, TextField, Typography, Container, Box } from '@mui/material';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Failed to submit form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Container>
      <Box mt={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Material-UI Form
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Name"
            name="name"
            variant="outlined"
            margin="normal"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            margin="normal"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Message"
            name="message"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
            value={formData.message}
            onChange={handleChange}
          />
          <Button variant="contained" style={{color:"white",width:"100%",backgroundColor:"skyblue"}} onClick={handleSubmit}>
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};
