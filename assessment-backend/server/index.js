const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const { getCompliment } = require('./controller')
app.get("/api/compliment", getCompliment);

const { getFortune } = require('./controller')
app.get("/api/fortune", getFortune);

const { getFacts } = require('./controller')
app.get("/api/facts", getFacts);

const { deletePlayer } = require('./controller')
app.delete("/api/players/:id", deletePlayer )

const { addPlayer } = require('./controller')
app.post("/api/players", addPlayer)

const { editPlayer } = require('./controller')
app.post("/api/players", editPlayer)

app.listen(4000, () => console.log("Server running on 4000"));
