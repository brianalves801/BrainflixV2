const express = require("express");
const app = express();
require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

// eslint-disable-next-line
const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static("public"));

const videoRoutes = require("./routes/api/video");
app.use("/api/video", videoRoutes);

app.listen(PORT, () => {});
