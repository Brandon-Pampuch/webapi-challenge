const postdb = require("../data/helpers/projectModel");

const router = require("express").Router();

router.post("/",  (req, res) => {
    try {
      const project = postdb.insert(req.body);
      res.status(201).json(project);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "could not add project" });
    }
  });