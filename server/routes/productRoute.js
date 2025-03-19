const router = require('express').Router();
const productService = require('../services/productService');

/* router.post('/:id/addComment', (req, res) => {
  const comment = req.body;
  const id = req.params.id;

  productService.addComment(id, comment).then((result) => {
    res.status(result.status).json(result.data);
  });
}); */

router.get('/:id', (req, res) => {
  const id = req.params.id;

  productService.getById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get('/', (req, res) => {
  productService.getAll().then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.post('/', (req, res) => {
  const post = req.body;
  productService.create(post).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put('/', (req, res) => {
  const post = req.body;
  const id = post.id;

  productService.update(post, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete('/', (req, res) => {
  const id = req.body.id;
  productService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;