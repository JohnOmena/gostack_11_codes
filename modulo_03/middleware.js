const express = require('express');
const { uuid, isUuid } = require('uuidv4');

const app = express();

app.use(express.json());

// Usar um array para armazenar as informações
const projects = [];

/**
 * Middleware para mostrar qual método está sendo requisitado e sua respectiva
 * url
 */
function logRequests(request, response, next) {
  const { method, url } = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel);

  next();
}

/**
 * Middleware para verificar se o ID da rota está correto
 */
function validateId(request, response, next) {
  const { id } = request.params;

  if(!isUuid(id)){
    response.status(400).json({ error: 'Invalid Project ID'});
  }

  return next();
}