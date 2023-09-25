//IMPORTANDO BIBLIOTECAS
import express from 'express';
import mustache from 'mustache-express';
import path from 'path';
import dotenv from 'dotenv';

////////////////ARQUIVOS//////////////////////
import mainRoutes from './routes/index';

//Porta do servidor
const port = process.env.PORT || 4000

//DotEnv Varieveis
dotenv.config();

//Express
const server = express();

// Template engine MUSTACHE
server.set ('view engine', 'mustache'); 
server.set ('views', path.join(__dirname, 'views')); 
server.engine('mustache', mustache());

//Configurando a pasta Public
server.use(express.static(path.join(__dirname, '../public')));

// Rotas 
server.use(mainRoutes); // routes/index

 //Pagina não encontrada
server.use((req, res)=>{
  res.send('Página não encontrada');
});


//Porta do server
server.listen(port,()=>{
  console.log( `Servidor rodando na porta : ${port}`)
});

