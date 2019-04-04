const express = require("express");
// Set Handlebars.
const exphbs = require("express-handlebars");
const app = express();

const PORT = process.env.PORT || 3000;

const orm = require("./config/orm")
// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index")
});

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// connects to handlbars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// const routes = require("./controllers/burgers_controller.js");

//app.use(routes);

app.listen(PORT, () => {
  console.log(`App now listening at localhost:${PORT}`);
});
