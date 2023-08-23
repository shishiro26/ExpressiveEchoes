const express = require("express");
const app = express();
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");
require("dotenv").config();
require("./config/db");

app.use(express.json());
app.use(errorHandler);
app.use(cors());
app.use("/user", require("./routes/userRoutes"));
app.use("/blog", require("./routes/blogRoutes"));

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
