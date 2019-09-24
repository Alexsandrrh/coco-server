const express = require('express');
const cors = require('cors');
const logger = require('morgan')
const axios = require('axios');
const app = express()
const PORT = process.env.PORT || 80;

app.use(cors());
app.use(logger('dev'))

app.get('/get', async (req, res) => {
  try {
    const { url } = req.query;
    const response = await axios.get(url);
    const data = await response.data;

    res.status(200).send(data);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.post('/post', async (req, res) => {
  res.send('Not working ;-(')
})

app.put('/put', async (req, res) => {
  res.send('Not working ;-(')
})

app.delete('/delete', async (req, res) => {
  res.send('Not working ;-(')
})

app.all('*', (req, res) => {
  res.send('Hello!\nThis cors server')
})

app.listen(PORT, () => {
  console.log(`Server started on : http://localhost:${PORT}/`);
});
