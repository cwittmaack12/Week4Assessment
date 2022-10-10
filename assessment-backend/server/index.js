const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const {
    getCompliment,
    getFortune,
    getFacts,
    deletePlayer,
    addPlayer,
    editPlayer}
    = require('./controller')

app.get("/api/compliment", getCompliment);

app.get("/api/fortune", getFortune);

app.get("/api/facts", getFacts);

app.delete("/api/players/:id", deletePlayer )

app.post("/api/players", addPlayer)

app.put("/api/players", editPlayer)

app.listen(4000, () => console.log("Server running on 4000"));
