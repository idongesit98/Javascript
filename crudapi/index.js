const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product_model.js');
const productRoute = require("./routes/product_route.js");
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use("/api/products",productRoute);



mongoose.connect("mongodb+srv://robsonidongesitsamuel:ukrLxLgSPm8QoqyZ@backenddata.gxow1jk.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendData")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () =>{
        console.log('Server is running on port 3000');
    });
})
.catch(() => { 
    console.log("Connection failed!");
});

