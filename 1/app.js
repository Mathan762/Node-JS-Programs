var http = require('http');
const fs = require('fs');
const port = 3000;

http.createServer((req, res) => {
    res.write('Hi');
    res.end();
}).listen(port, () => {
    console.log(`Server listening at port 3000`);
})