const http = require('http');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {

    if(req.method === 'POST') {
        let arr = [];
        let user;
        let password;
        let dob;
        let gender;
        let remarks;

        req.on('data', chunk => {
            arr.push(chunk);
        });

        req.on('end', () => {
            arr = Buffer.concat(arr).toString();
            console.log(arr);
            user = arr.split('&')[0].split('=')[1];
            password = arr.split('&')[1].split('=')[1];
            dob = arr.split('&')[2].split('=')[1];
            gender = arr.split('&')[3].split('=')[1];
            remarks = arr.split('&')[4].split('=')[1];
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(`<h1>User : ${user}</h1><h1>Password : ${password}</h1><h1>DOB : ${dob}</h1><h1>Gender : ${gender}</h1><h1>Remarks : ${remarks}</h1>`);
            res.end();
        })
    }

    else {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
        console.log('Hi');
    }
}).listen(port, () => {
    console.log(`Server listening at PORT ${port}`);
});