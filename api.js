const http = require ("http");
const express = require ("express");
const app = express();

app.use(express.json());
let userData = [
    {
        id: 1,
        username: "abhiram" 
    },
    {
        id: 2,
        username: "zhastra" 
    },
    {
        id: 3,
        username: "elven_king" 
    },
    {
        id: 4,
        username: "noobmaster" 
    },
    {
        id: 5,
        username: "pyroKing" 
    }
];

//To get user data
app.get("/user" , (req,res) =>{
    res.json(userData);
});

//get limited queries
app.get("/user/amount", (req, res) => {
	const limit = req.query.limit;
	const startindex = 0;
	const endindex = limit;
	const resultuser = userData.slice(startindex, endindex);
	res.json(resultuser);
});

//GEt specific userdata
app.get("/user/:id", (req, res) => {
	let found = userData.find(function (item) {
		return item.id === parseInt(req.params.id);
	});
	res.json(found);
});

//post user data
app.post("/user", (req, res) => {
	let newUser = {
		id: userData.length + 1,
		username: req.body.username,
	};
	userData.push(newUser);
	res.json(newUser);
});

//update user Data
app.put("/user/:id", (req, res) => {
	let found = userData.find((item)=> {
		return item.id === parseInt(req.params.id);
	});
	found.username = req.body.username;
	res.json(found);
});


app.listen(3000);