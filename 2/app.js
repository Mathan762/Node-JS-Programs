const http = require('http');
const url = require('url');
// const myURL = new URL(window.location);

const port = 3000;

http.createServer((req, res) => {
    var y = req.headers.host;
    var x = url.parse(req.url).path;
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h3>Hii, You are accessing the following URL</h3>');
    res.write(`URL:http://${y}${x}<br>`);
    res.write(`Method:${req.method}`);
    res.end();
}).listen(port, () => {
    console.log(`Server listening at PORT ${port}`);
})