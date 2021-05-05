const http = require('http');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {

    if(req.method === 'POST') {
        let arr = [];
        let email;
        let password;

        req.on('data', chunk => {
            arr.push(chunk);
        });

        req.on('end', () => {
            arr = Buffer.concat(arr).toString();
            console.log(arr);
            email = arr.split('&')[0].split('=')[1];
            password = arr.split('&')[1].split('=')[1];
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.write(`<h1>User : ${email}</h1><h1>Password : ${password}</h1>`);
            res.end();
        })
    }

    else {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    }
}).listen(port, () => {
    console.log(`Server listening at PORT ${port}`);
});