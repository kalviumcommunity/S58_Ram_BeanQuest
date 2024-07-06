const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const coffeeRoutes = require('./routes/coffee_routes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URI;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to BrewVista!');
});

app.use('/api', coffeeRoutes);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
