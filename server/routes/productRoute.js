const router = require('express').Router();
const productService = require('../services/productService');

/* router.post('/:id/addRating', (req, res) => {
  // SE över hur vi ratingen ska fungera och hur man löser snitt betyget
  const rating = req.body;
  const id = req.params.id;

  productService.addRating(id, rating).then((result) => {
    res.status(result.status).json(result.data);
  });
});  */

router.post('/:id/addRating', async (req, res) => {

  try {
      const rating = req.body;
      const id = req.params.id;

      const result = await productService.addRating(id, rating);
      return res.status(result.status).json(result.data);
  
  } catch (error) {
      return res.status(500).json({ message: "Ett internt serverfel uppstod vid betygsättningen" });
  }
});

//tidigare lösning för addtocart
/* router.post('/:id/addToCart', (req, res) => {

    const { userId, amount, productId } = req.body; 
    const cartId = req.params.id;
  
    productService.addToCart(userId, productId, amount, cartId).then((result) => {
      res.status(result.status).json(result.data);
    });
  }); */

  router.post('/:id/addToCart', (req, res) => {

    const { userId, amount } = req.body; 
    const productId = req.params.id;
  
    productService.addToCart(userId, productId, amount).then((result) => {
      res.status(result.status).json(result.data);
    });
  });

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
  const product = req.body;
  productService.create(product).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.put('/', (req, res) => {
  const product = req.body;
  const id = product.id;

  productService.update(product, id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.delete('/', (req, res) => {
  const id = req.body.id;
  productService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get('/:id/ratings', async (req, res) => {

  try {
      const id = req.params.id;

      const result = await productService.showRating(id);
      return res.status(result.status).json(result.data);
  
  } catch (error) {
      return res.status(500).json({ message: "Ett internt serverfel uppstod vid betygsättningen" });
  }
});



module.exports = router;