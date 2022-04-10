const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/circle', (req, res) => {
  res.sendFile(__dirname + '/circle.html');
})

app.get('/triangle', (req, res) => {
  res.sendFile(__dirname + '/triangle.html');
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
})