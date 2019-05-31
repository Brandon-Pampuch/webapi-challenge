const express = require('express');

const projectsRouter = require("./projects/projectsRouter")
const actionsRouter = require("./actions/actionsRouter")

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send(`<h2>Let's solve the challenge!</h2>`)
  });

  server.use('/api/projects', projectsRouter)
  server.use('/api/actions', actionsRouter)


  



module.exports = server;