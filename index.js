const express = require("express");
const app = express() // creando  la aplicacion 

//const http = require("http");

let notes = [
  {
    id: 1,
    content: "HTML is easy sencillo y facil",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

//const app = http.createServer((request, response) => {
//  response.writeHead(200, { "Content-Type": "application/json" });
//  response.end(JSON.stringify(notes));
//});

app.get('/',(request, response)=>{// '/' significa entrar al dominio

  response.send('<h1>hola mundo</h1>')

})

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
