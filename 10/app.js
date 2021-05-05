const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3030;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/subscription', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/display', (req, res) => {
    let name = req.body.uname;
    let email = req.body.email;
    let checkbox = req.body.letter;
    let radio = req.body.format;
    let sub = req.body.subscription;
    let textarea = req.body.comments;

    res.send(`<h1>Name :${name}</h1><h1>Email : ${email}</h1><h1>Check : ${checkbox}</h1><h1>Format of the Email : ${radio}</h1><h1>Subscription : ${sub}</h1><h1>Comments to the Editor : ${textarea}</h1>`);
})

app.listen(port, () => {
    console.log(`Server listening at PORT ${port}`);
})