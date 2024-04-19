require('dotenv').config();
const express = require('express')
const app = express();
const path = require('path');
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const {logger} = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbConn');
const PORT = process.env.PORT || 3500 

// connect to MongoDB
connectDB();
//custom middleware logger
app.use(logger);

//Cross origin resource sharing (CORS)
app.use(cors(corsOptions));

/*Built in middleware to handle urlencoded data
in other words,form data:
content-type:application/x-www-form-urlencoded
*/
app.use(express.urlencoded({extended:false}));

//Built in middleware for json
app.use(express.json());

//middleware for cookies 
app.use(cookieParser());

//Built in middleware for static files
app.use('/',express.static(path.join(__dirname,'/public')));

//routes
app.use('/', require('./routes/root'));
app.use('/register',require('./routes/register'));
app.use('/auth',require('./routes/auth'));
app.use('/refresh',require('./routes/refresh'))
app.use('/logout', require('./routes/logout'));

app.use(verifyJWT);
app.use('/employees', require('./routes/api/employees'));

// app.use is for middleware while app.all is for routing and applies to all http requests
app.all('*', (req,res) => {
    //Send a file in node.js
    res.status(404);
    if(req.accepts('html')){
    res.sendFile(path.join(__dirname, 'views','404.html')); //302 by default
    }else if (req.accepts('json')){
        res.json({error: "404 Not found"});
    }else {
        res.type('txt').send("404 Not found");
    }
});

app.use(errorHandler);
mongoose.connection.once('open',() =>{
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})

