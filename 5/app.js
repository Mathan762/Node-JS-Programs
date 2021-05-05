const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended:false}));

const port = 3030;

app.get('/', (req, res) => {
    res.send(__dirname + '5/index.html');
});

app.post('/validate', (req, res) => {
    let username = req.body.user;
    let password = req.body.password;
    let dob = req.body.dob;
    let gender = req.body.gender;
    let remarks = req.body.remarks;

    res.send(`<h1>User : ${username}</h1><h1>Password : ${password}</h1><h1>DOB : ${dob}</h1><h1>Gender : ${gender}</h1><h1>Remarks : ${remarks}</h1>`);
})

app.listen(port,() => {
    console.log(`Server listening at PORT ${port}`);
})