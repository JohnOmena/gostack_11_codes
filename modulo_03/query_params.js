const express = require('express');

const app = express();

app.use(express.json());

const projecs = [];

// Query params: Utilizado mais para filtros ou paginação
// Se encontram após a "?" da rota
// se acessa com o método .query

app.get('/projects', (request, response) => {
  const { title, owner} = request.query;
  
  console.log(title);
  console.log(owner);

});;

app.listen(3333, () => {
  console.log('Back-end started!');
});
