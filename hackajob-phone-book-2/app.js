var express         = require("express");
var port            = process.env.PORT || 3000;
var router          = require("./config/routes.js");
var bodyParser      = require("body-parser");
var morgan          = require("morgan");
var methodOverride  = require("method-override");
var expressLayouts  = require("express-ejs-layouts");

var app             = express();


app.use(morgan("dev"));

app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended : true}));

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(expressLayouts);

app.use("/", router);

app.listen(port, function() {
  console.log("listening on port 3000");
});
