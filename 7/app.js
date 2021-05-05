const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3030;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/Home.html');
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/Login.html');
});


app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/Assignment_6.html');
});

app.get('/fgpwd', (req, res) => {
    res.sendFile(__dirname + '/ForgetPassword.html');
});

app.get('', (req, res) => {
    res.sendFile(__dirname + '/404page.html');
});


app.listen(port, () => {
    console.log(`Server listening at PORT ${port}`);
})