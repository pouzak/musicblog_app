require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const cors = require('cors');
//before heroku
const path = require('path');



const Posts = require('./routes/api/Posts');

const app = express();

//bodyparser
app.use(bodyParser.json());
//app.use(cors());
//app.use(formData.parse())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});


//connect to db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
.then(()=> console.log('++++connected to MongoDB'))
.catch(err=> console.log(err));

//use routes routes/api.items
app.use('/api/', Posts)

//before serve to heroku
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`+++++server started at ${port}`));
