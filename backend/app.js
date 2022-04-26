var express = require("express");
var app = express();
var mysql = require("./dbcon.js");
var bodyParser = require("body-parser");
PORT = 5002;
var cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("mysql", mysql);

/**********************************
              ROUTES
***********************************/

// GET - ANIMALS
app.get("/", function (req, res) {
  query1 = "SELECT animal_id, description, created_at FROM animals;";
  mysql.pool.query(query1, function (err, results, fields) {
    // Send the results to the browser
    let base = "<h1>Animal Results: </h1>";
    res.send(results);
  });
});

app.listen(PORT, function () {
  console.log(
    "Express started on http://localhost:" +
      PORT +
      "; press Ctrl-C to terminate."
  );
});
