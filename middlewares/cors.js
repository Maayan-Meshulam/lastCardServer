const cors = require("cors");

const corsmiddleware = cors({
  origin: [
    "http://127.0.0.1:5173",
    "http://localhost:5173",
    "https://www.cardsproject.co.il",
    "https://react-project-last.onrender.com"
  ],
});

module.exports = corsmiddleware;
