const router = require('express').Router();
const userService = require('../services/userService');

/* router.post('/:id/addComment', (req, res) => {
  const comment = req.body;
  const id = req.params.id;

  userService.addComment(id, comment).then((result) => {
    res.status(result.status).json(result.data);
  });
}); */

router.get('/:id', (req, res) => {
  const id = req.params.id;

  userService.getById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get('/', (req, res) => {
  userService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post('/', (req, res) => {
  const post = req.body;
  userService.create(post).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put('/', (req, res) => {
  const post = req.body;
  const id = post.id;

  userService.update(post, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete('/', (req, res) => {
  const id = req.body.id;
  userService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;