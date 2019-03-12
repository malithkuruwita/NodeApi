const express = require('express');
const app = express();

let bearArray = [
    {
        id:1, 
        name:'Grizzly Bear'
    },
    {
        id:2, 
        name:'Polar Bear'
    },
    {
        id:3, 
        name:'Panda Bear'
    },
    {
        id:4,
        name:'Testing Bear'
    }

]

app.get('/', (req, res) => {
    res.send('Welcome to Bear API');
})
app.get('/api/bears', (req, res) => {
    res.send(bearArray);
})

app.get('/api/bears/:bearId', (req, res) => {
    let idparams = req.params.id;
    //let params = req.query.showMore;
    let bear = bearArray.find(b => b.id === parseInt(req.params.bearId));
    if(!bear){
        res.status(404).send("The Given Id Doesn't Exist");
        return;
    }
    res.send(bear);
})


const port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

