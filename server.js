const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const routes = require("./src/routes/index");


const app = express();



// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./src/config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(
    // () => console.log("MongoDB successfully connected")
    )
  .catch(err => console.log(err));




// Passport middleware
app.use(passport.initialize());

// Passport config
require("./src/config/passport")(passport);

// Routes
routes(app);
// app.use(routes);




const port = process.env.PORT || 5000;
const ip = '192.168.0.126';


app.listen(port, ip,  () => console.log(`Server up and running on port ${port} !`));
