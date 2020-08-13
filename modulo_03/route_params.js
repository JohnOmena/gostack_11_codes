const express = require('express');

const app = express();

app.use(express.json());

const projecs = [];

// São usados para identificação de recursos (Atualizar/Deletar)
// Utiliza o :id

app.put('/projects/:id', (request, response) => {
  
  const params = request.params;

  console.log(params);
  
});

app.listen(3333, () => {
  console.log('Back-end started!');
});
