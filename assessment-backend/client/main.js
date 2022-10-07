const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
complimentBtn.addEventListener('click', getCompliment)
////////////////////////////////////////////////////////

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data2 = res.data;
            alert(data2);
    });
};
fortuneBtn.addEventListener('click', getFortune)
///////////////////////////////////////////////////////

const factsBtn = document.getElementById("factsButton")

const getFacts = () => {
    axios.get("http://localhost:4000/api/facts/")
        .then(res => {
            const data3 = res.data;
            alert(data3);
    });
};
factsBtn.addEventListener('click', getFacts)
///////////////////////////////////////////////////////

const playerBtn = document.querySelector('.delete_input')

const deletePlayer = () => {
    axios.delete(`http://localhost:4000/api/players/:id${playerBtn}`)
    .then(response => {
        console.log(response);
        console.log(res.data)})
}
playerBtn.addEventListener('submit', deletePlayer)
////////////////////////////////////////////////////////

const addBtn = document.querySelector('.add-input')

const addPlayer = (evt) => {
    evt.preventDefault();
    let newPlayer = document.querySelector('.add-input');
    let newSet = {
        pname: newPlayer
    }
    axios.post('http://localhost:4000/api/players/', newSet)
    .then( res => console.log(res) )
}
addBtn.addEventListener('submit', addPlayer)
/////////////////////////////////////////////////////

const identifier = document.querySelector('.id')
const newName = document.querySelector('.edit-input')

const editPlayer = (evt) => {
    evt.preventDefault();
    let editName =  
    axios.put(`http://localhost:4000/api/players/:id${identifier}`,{pname: newName} ) 
    .then(response => {})
}




