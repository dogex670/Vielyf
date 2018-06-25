const express = require("express");
const mongoose = require("mongoose");

const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");

//DB config
const db = require("./config/keys").mongURI;

//Connect to mongodb thru mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(console.error());

const app = express();

app.get("/", (req, res) => res.send("Hello world!"));

//Use routes
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
