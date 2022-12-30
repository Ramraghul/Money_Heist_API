//Required;
require('./Src/Config/Config')
const Team = require('./Src/Routes/teamHeist')
const express = require('express');
const cors = require('cors');
const App = express();
require('dotenv').config();

//Middleware;
App.use(express.json());
App.use(cors({ origin: "*" }))


//User Routes;
App.use('/',Team);
App.use('/Money_heist',Team);


//Port Listing;
const PORT =process.env.PORT || 8080;
App.listen(PORT, () => {
    console.log('Port is Running on ' + PORT);
});