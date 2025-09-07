const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// API route for crash detection
app.get("/api/crash-detection", (req, res) => {
  res.json({ message: "Crash detection endpoint" });
});

// API route for accident-prone areas
app.get("/api/accident-graph", (req, res) => {
  res.json({ message: "Accident-prone area data" });
});

// API route for finding nearest hospitals
app.get("/api/nearest-hospitals", (req, res) => {
  res.json({ message: "Nearest hospitals data" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
