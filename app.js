const express = require("express");
const morgan = require("morgan");

const app = express();

//  Middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/users", require("./routes/users"));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server listening at ${port}`);
