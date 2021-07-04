const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const todoRoutes = require("./API/todo/routes");
const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());

// // Routes
// app.get("/todos", (req, res) => {
//   res.json(todos);
// });

app.use("/todos", todoRoutes);
app.listen(8001, () => {
  console.log("the application is running on localhost:8001");
});
