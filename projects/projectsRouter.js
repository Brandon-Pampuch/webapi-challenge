const projectsdb = require("../data/helpers/projectModel");

const router = require("express").Router();

router.get("/", (req, res) => {
    const user = projectsdb.get()
    .then(projects =>{
      res.status(200).json({message:"projects sent",projects})
    })
    .catch (error =>{
      console.log(error);
      res.status(500).json({message:"could not get projects"})
    }) 
  })

  router.post("/", (req, res) => {
    try {
      const project = projectsdb.insert(req.body);
      res.status(201).json(project);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "could not add project" });
    }
  });

  router.put("/:id", (req, res) => {
    try{
        const updateproject = projectsdb.update(req.params.id, req.body)
        if(updateproject){
          res.status(200).json({message:"project updated"})
        }else{
          res.status(404).json({message:"project not found"})
        }
      }catch(error){
        console.log(error)
          res.status(500).json({message:"cannot update project"})
        }
    });

    router.delete("/:id", async (req, res) => {
  
        const removeproject = await projectsdb.remove(req.params.id)
        try{
          if(removeproject){
            res.status(200).json({message:"project has been removed"})
          }else{
            res.status(404).json({message:"project cannot be found"})
          }
        }catch(error){
          console.log(error)
          res.status(500).json({message:"cannot remove project"})
        }
    });

    





  module.exports = router;