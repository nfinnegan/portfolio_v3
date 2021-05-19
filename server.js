const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const routes = require("./controllers");

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

//sets up instance of hbs
const hbs = exphbs.create({});

// Set Handlebars as the default template engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

//Routes
app.use(routes);

// Listener
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
