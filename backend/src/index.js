// Imports modules:
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

// Methods: GET, POST, PUT & DELETE;

// Type of parameters:
// - Query Params: request.query (Filters, ordering/sorting, pagination...);
// - Route Params: request.params (Identify resources in updating or removing);
// - Body: request.body (Data to create or update a registry)

mongoose.connect('mongodb+srv://higuetari:5WBGCoLkZUGa5c4X@cluster0-b0ery.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true, // Closes deprecation of 'collection.ensureIndex' by doing it
  useFindAndModify: false,  // Dreprecation warning of `findOneAndDelete()` route method
});

app.use(cors()) // Permits connection with all kind of host and origin
app.use(express.json());

app.use(routes);

app.listen(1989);