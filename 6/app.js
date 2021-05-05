const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3030;

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send(__dirname + '6/index.html');
})

app.post('/validate', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    res.send(`<h1>User : ${email}</h1><h1>Password : ${password}</h1>`);
})

app.listen(port, () => {
    console.log(`Server listening at PORT ${port}`);
})