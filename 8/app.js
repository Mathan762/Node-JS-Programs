const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 3000;

app.use(express.static(__dirname));
app.set('view engine', 'ejs'); 
app.use(bodyParser.urlencoded({extended : false}));

app.get('/login', (req, res) => {
    res.render('index');
})

app.post('/dashboard', (req, res) => {

    let obj = {
        usermail : req.body.email,
        userpassword : req.body.password
    }

    res.render('dashboard', {obj});

    // res.send(`<h1>${obj.usermail}</h1><br><h1>${obj.userpassword}</h1>`);
})

app.listen(port, () => {
    console.log('Server listening');
})