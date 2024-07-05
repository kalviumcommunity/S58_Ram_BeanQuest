const mongoose = require('mongoose');

const uri = 'mongodb+srv://ramnathawat:wb17PMkKpwz12Qh5@capstone.uqelmqs.mongodb.net/?retryWrites=true&w=majority&appName=Capstone'; // Your MongoDB URI

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

module.exports = mongoose.connection;
