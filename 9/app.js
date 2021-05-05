const express = require('express');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.send(__dirname + '/index.html');
})

app.post('/validate', (req, res) => {
    let name = req.body.name;
    let father_name = req.body.fathername;
    let institute = req.body.ins_name;
    let batch = req.body.batch;

    let office = req.body.office;
    let web = req.body.web;
    let it = req.body.it;
    let cp = req.body.cp;

    res.send(`<h1>Name : ${name}<br>Father Name : ${father_name}<br>Institute : ${institute}<br>Batch : ${batch}<br><br>Marks<br><br>Office Automation : ${office}<br>Web Designing : ${web}<br>IT : ${it}<br>C# Programming : ${cp}</h1>`);
})

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
})