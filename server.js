const express = require("express");
const dbConnect = require("./dbConnect");
const itemsRoute = require("./routes/itemsRoute");

const app = express();

app.use(express.json());

app.use("/api/items/", itemsRoute);

const port = 5000;

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`NodeJS Server Running at port ${port}!`));
