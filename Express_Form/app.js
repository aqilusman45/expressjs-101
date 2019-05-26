const express = require('express');
const body_parser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 4002;

app.use(express.static('public'));
app.use(body_parser());


app.get('/', (req, res, next)=>{
    res.sendFile('index.html')
})

app.post('/login', (req, res, next)=>{
    res.send(JSON.stringify(req.body));
})


app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
})