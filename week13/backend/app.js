const http = require('node:http');
const { json } = require('node:stream/consumers');

const hostname = '127.0.0.1';
const port = 3000;

let nomes = ["Jão da Silva", "Maria de Souza", "Zé da Manga", "Fernando Augusto"]


const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(nomes));
  } else if (req.method === "POST") {
    console.log(req.json());

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('POST ainda indisponível!\n');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});