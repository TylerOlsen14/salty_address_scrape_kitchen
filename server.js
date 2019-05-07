const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const address = require('./routes/api/address')

const app = express();

app.use(cors())
//Bodyparser middleware
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  // .connect("mongodb://Tucker:Tucker@cluster0-shard-00-00-tihhu.mongodb.net:27017,cluster0-shard-00-01-tihhu.mongodb.net:27017,cluster0-shard-00-02-tihhu.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true", { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected ... '))
  .catch(err => console.log(err));

  //use routes
app.use('/', address)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
