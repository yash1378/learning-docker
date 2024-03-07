const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get('/api/getData', (req, res) => {
  res.status(200).json({ message: 'Data fetched successfully!' });
})

app.post('/api/submitForm', (req, res) => {
  const formData = req.body;
  console.log('Form data received:', formData);

  // Add your logic to handle the form data here

  res.status(200).json({ message: 'Form submitted successfully!' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
