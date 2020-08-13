const express = require('express');

const app = express();

app.use(express.json());

const projecs = [];


// Resquest Body: Conteúdo na hora de criar ou editar um recurso
// Essas informações chegam através de JSON

app.post('/projects', (request, response) => {
  
  const { title, owner } = request.body;

  console.log(title);
  console.log(owner);
  
});

app.listen(3333, () => {
  console.log('Back-end started!');
});