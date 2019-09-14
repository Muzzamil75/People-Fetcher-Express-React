const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");

const app = express();

// giving Client URL to server (where client app deployed OR from where the request will come and we handle that)
const origin =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:3000"
    : "https://mystifying-ramanujan-7bc352.netlify.com";

app.use(express.json());
app.use(morgan("dev"));
app.use(cors({ origin }));

app.get("/", async (req, res) => {

  //fetching ```count``` parameter from the query strng (URL)
  const count = req.query.coount || 20;
  const response = await axios.get(
    `https://randomuser.me/api/?results=${count}`
  );
  res.json({ accessMe: response.data.results });
});

app.listen(4000, () => {
  console.log(`Listening on PORT 4000`);
});
