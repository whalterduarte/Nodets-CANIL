//IMPORTANDO BIBLIOTECAS

import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
/////////////////////////////////////////////

dotenv.config();

const server = express(); // CONFIGURAÇÃO DO SERVIDOR

server.set ('view engine', 'mustache') // Template engine MUSTACHE
server.set ('views', path.join(__dirname, 'views'));  // É o caminho absoluto para o diretório onde este arquivo está localizado.
server.engine('mustache', mustache());

// Configuração para servir arquivos estáticos a partir do diretório 'public'
server.use(express.static(path.join(__dirname, '../public')));

// Rotas 

server.listen(process.env.PORT);