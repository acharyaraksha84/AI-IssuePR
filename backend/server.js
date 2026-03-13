const express = require("express");
const cors = require("cors");

const issueRoutes = require("./routes/issueRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/issues", issueRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});