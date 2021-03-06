var express         = require("express");
var morgan          = require("morgan");
var methodOverride  = require("method-override");
var bodyParser      = require("body-parser");
var mongoose        = require("mongoose");

var config          = require("./config/config.js");

var app             = express();

var server          = require("http").Server(app);

mongoose.connect(config.database);

app.use(express.static(__dirname + "/public"));

app.use(morgan("dev"));

app.use(methodOverride(function(req, res) {
  if (req.body && typeof req.body === "object" && "_method" in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({ message: "Unauthorized request" });
  }
  next();
});

var routes = require("./config/routes");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

server.listen(config.port, function() {
  console.log("Sketch-off is running on port ", config.port);
});
