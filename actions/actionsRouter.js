const actionsdb = require("../data/helpers/actionModel");
const projectsdb = require("../data/helpers/projectModel");

const router = require("express").Router();

router.get("/:id", (req, res) => {
  const action = actionsdb
    .get(req.params.id)
    .then(actions => {
      res.status(200).json({ message: "actions recieved", actions });
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "could not get actions" });
    });
});
//add middleware
router.post("/:id", validateProject, (req, res) => {
  try {
    const action = actionsdb.insert(project);
    res.status(201).json(action);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "could not add action" });
  }
});

router.put("/:id", (req, res) => {
  try {
    const updateaction = actionsdb.update(req.params.id, req.body);
    if (updateaction) {
      res.status(200).json({ message: "action updated" });
    } else {
      res.status(404).json({ message: "action not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "cannot update action" });
  }
});

router.delete("/:id", async (req, res) => {
  const removeaction = await actionsdb.remove(req.params.id);
  try {
    if (removeaction) {
      res.status(200).json({ message: "action has been removed" });
    } else {
      res.status(404).json({ message: "action cannot be found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "cannot remove action" });
  }
});

async function validateProject(req, res, next) {
  const project = await projectsdb.getProjectActions(req.params.id);
  if (project) {
    req.project = project;
    next();
  } else {
    res.status(400).json({ message: "invalid project" });
  }
}

module.exports = router;
