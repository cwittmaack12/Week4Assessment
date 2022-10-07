const players = [
    {"id": 1, "pname": "Lebron"},
    {"id": 2, "pname": "Garnett"},
    {"id": 3, "pname": "Shaq"}   
]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["You will pass an upcoming assessment!", "You will come into a substantial sum of $$$$", "A dubious friend may be an enemy in camouflage", "A fresh start will put you on your way.","A feather in the hand is better than a bird in the air"];
      
        // choose random compliment
        let randomIndex2 = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex2];
      
        res.status(200).send(randomFortune);
    },
    getFacts: (req, res) => {
        const facts = ["Australia is wider than the moon","It's illegal to own just one guinea pig in Switzerland","The real name for a hashtag is an octothorpe", "All the clocks in Pulp Fiction are set to 4.20","The actors who voiced Mickey and Minnie mouse got married in real life"];
      
        // choose random compliment
        let randomIndex3 = Math.floor(Math.random() * facts.length);
        let randomFacts = facts[randomIndex3];
      
        res.status(200).send(randomFacts);
    },

    deletePlayer: (req,res) => {
        const {id} = req.params;
        const playersToDelete = players.findIndex((playersObj) => playersObj.id === parseInt(id));
        players.splice(playersToDelete, -1, 1);
        res.status(200).send({message: "Deleted", players})
    },

    addPlayer:(req, res) => {
        console.log(req.body);
        const newSet = {
            id: req.body.id,
            pname: req.body.pname
        }
        players.push(newSet);
        res.status(200).send({message: 'Added', players})
    },

    editPlayer:(req,res) => {
        console.log(req.params);
        const {id} = req.params;
        const playerToUpdate = players.findIndex((players =>
            players.id === parseInt(id)),
        playerToUpdate.pname = req.body.pname)
        res.status(200).send({players})

    }
}
