const express = require('express');
const mongoose = require('mongoose');
const azure = require('azure-storage');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/dataProcessing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});


const blobService = azure.createBlobService();

// Routes
const dataRoutes = require('./routes/data');
app.use('/data', dataRoutes);

app.get('/', (req, res) => {
  res.send('Backend Data Processing System');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});