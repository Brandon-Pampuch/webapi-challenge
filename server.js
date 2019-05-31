const express = require('express');

const projectsRouter = require("./projects/projectsRouter")

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h2>Let's solve the challenge!</h2>`)
  });

  server.use('/api/projects', projectsRouter)


  



module.exports = server;