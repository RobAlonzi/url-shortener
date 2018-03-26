import express from 'express';
import mongoose from "mongoose";
import bodyParser from "body-parser";
import { parse as visitorParse } from "device-detector";
const path = require('path');

// Custom Files
require("./config");
import encoder from "./helpers/shortener"
import models from "./models";

// Mongoose Models
const Counter = mongoose.model("Counter");
const URL = mongoose.model("Url");
const Visitor = mongoose.model("Visitor");

// Mongodb connection
const MONGO_URI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`;
if (!MONGO_URI) {
  throw new Error('You must provide a Mongo URI');
}

// Mongoose setup
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI).then(
	() =>  console.log(`Connected to MongoDB instance: ${MONGO_URI}`),
	err => console.log('Error connecting to MongoDB:', error)
);

const dirname = path.resolve("./");

// Express Setup
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/u/', function(req, res){
  // route to create and return a shortened URL given a long URL

  URL.find({}).sort({_id: "desc"}).exec((err, docs) => {

    if(err){
      // Send Error code
      console.log(err);
    }

    res.send(docs);
  });
});

// Get details about a URL id
app.get('/u/:id/details', function(req, res){
  // Get the id
  let id = req.params.id;

  // Check our DB for the ID, also populate the virtual visitors collection
  URL.findOne({_id : id }).populate("visitors").exec(function(err, doc){

    if(err){
      // Send Error code
      console.log(err);
    }

    // Convert to JS Object so we can add the short url to the return object
    let result = doc.toObject();
    result.shortUrl = `${process.env.WEB_HOST}/u/${encoder.encode(doc._id)}`;
    // Send it!
    res.send(result);
  });
});

// Redirect any '/u/' URL that comes our way
app.get('/u/:encoded_id', function(req, res){
  
  // Get the encoded id, and decode it
  let encodedId = req.params.encoded_id;
  let id = encoder.decode(encodedId);

  // Check our DB for the ID 
  URL.findOneAndUpdate({_id : id }, {$inc: {count: 1} }, function(err, doc){

    // We have a url with that id
    if(doc){

      // Get info about our visitor
      let visitorDevice = visitorParse(req.headers['user-agent']);

      // Save this visitor 
      new Visitor({
        url: id,
        ipAddress: req.ip,
        deviceType: visitorDevice.type,
        browser: visitorDevice.browser,
        engine: visitorDevice.engine,
        browserVersion: visitorDevice.version,
        os: visitorDevice.os,
        userAgent: visitorDevice.userAgent 
      }).save()

      // Redirect them to where they want to go, add http:// to the front if needed
      let redirect = !/^(?:f|ht)tps?\:\/\//.test(doc.url) ? `http://${doc.url}` : doc.url;
      res.redirect(redirect);

    // Could not find this redirect, let's send them to the home page
    }else{
      res.redirect(process.env.WEB_HOST);
    }
  });
});

// Route to create and return a shortened URL given a long URL
app.post('/api/shorten', function(req, res){
  let result,
      url = req.body.url;

  // If it's not a valid URL, send an error back
  if(!/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(url)){
    res.status(400);
    res.send("Please enter a valid URL!");
  }
  else{
    new URL({ url }).save(function(err, newUrl){
      
      // Error creating document, notify user
      if(err){
        res.status(400);
        res.send("Something went wrong, please try again!");
      }
  
      // Convert to JS Object so we can add the short url to the return object
      result = newUrl.toObject();
      result.shortUrl = `${process.env.WEB_HOST}/u/${encoder.encode(newUrl._id)}`;
      // Send it!
      res.send(result);
    });

  }
});

// Catch all endpoint for React SPA
app.get('*', (req, res) => {
  // Send the compiled HTML file
  res.sendFile('public/index.html', { root: __dirname });
});

// Start
app.listen(3000, () => {
  console.log('Listening on Port 3000');
});

module.exports.app = app;