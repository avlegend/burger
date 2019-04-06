const express = require("express");
// Set Handlebars.
const exphbs = require("express-handlebars");
const app = express();
const methodOverride = require("method-override");
const PORT = process.env.PORT || 3000;

const orm = require("./config/orm")
// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));



// Parse request body as JSON
app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_"));

// connects to handlbars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

//app.use(routes);

app.get("/", (req, res) => {
  //TBD This needs to be fetched from DB
 orm.selectAll('burgers', function(data, err){
   if(err) throw err;

   res.render('index', {burgers:data});
 })
});

app.put("/burger/:id", (req, res) => {
//Now we have acces to req.params.id
orm.updateOne('burgers', 'devoured', true, req.params.id,function(){
  res.redirect('/');
});

});

app.listen(PORT, () => {
  console.log(`App now listening at localhost:${PORT}`);
});
