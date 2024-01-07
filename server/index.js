const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const multer = require("multer");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(cors());

const CONNECTION_STRING = "mongodb+srv://rajalakshmi:9940053260@cluster0.zwtjaeq.mongodb.net/verify?retryWrites=true&w=majority";

const DATABASE_NAME = "verify";
var database;

app.listen(PORT, () => {
  MongoClient.connect(CONNECTION_STRING, (error, client) => {
    if(error){
      console.log(error);
    }
    else{
      database = client.db(DATABASE_NAME);
      console.log("MongoDB connection successful");
    }
  })
});

app.get('/api-login', (request, response) => {
  database.collection("login_details").find({}).toArray((error,result) => {
    response.send(result);
  })
})

app.post('/api-login', multer().none(), (request, response) => {
  database.collection("login_details").count({},function(error, numOfDocs){
    database.collection("login_details").insertOne({ 
      id:(numOfDocs+1).toString(),
      cid:request.body.cid,
      email:request.body.email,
      pwd:request.body.pwd,
    });
    response.json("Details Added Successfully");
  })
})

app.get('/api', (request, response) => {
  database.collection("product_details").find({}).toArray((error,result) => {
    response.send(result);
  })
})

app.post('/api', multer().none(), (request, response) => {
  database.collection("product_details").count({},function(error, numOfDocs){
    database.collection("product_details").insertOne({ 
      id:(numOfDocs+1).toString(),
      uid:request.body.uid,
      name:request.body.name,
      description:request.body.description,
      company:request.body.company,
      location:request.body.location,
      date:request.body.date
    });
    response.json("Product Added Successfully");
  })
})