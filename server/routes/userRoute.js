const router = require('express').Router();
const db = require('../models');
const validate = require('validate.js');
const userService = require('../services/userService');

const constraints = {
    email: {
      length: {
        minimum: 4,
        maximum: 200,
        tooShort: '^E-postadressen måste vara minst %{count} tecken lång.',
        tooLong: '^E-postadressen får inte vara längre än %{count} tecken lång.'
      },
      email: {
        message: '^E-postadressen är i ett felaktigt format.'
      }
    },
// SE över en constraint för password
  };
/* router.post('/:id/addComment', (req, res) => {
  const comment = req.body;
  const id = req.params.id;

  userService.addComment(id, comment).then((result) => {
    res.status(result.status).json(result.data);
  });
}); */

router.get('/:id/getCart/', (req, res) => {
    // BYgg denna funktion för att hämta alla produkter i varukorgen
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
  const user = req.body;
  const invalidData = validate(user, constraints);
  if (invalidData) {
    res.status(400).json(invalidData);
  } else {
    db.user.create(user).then((result) => {
      res.send(result);
    });
  }
});

router.put('/', (req, res) => {
  const user = req.body;
  const invalidData = validate(user, constraints);
  const id = user.id;
  if (invalidData || !id) {
    res.status(400).json(invalidData || 'Id är obligatoriskt.');
  } else {
    db.user
      .update(user, {
        where: { id: user.id }
      })
      .then((result) => {
        res.send('Inlägget har uppdaterats.');
      });
  }
});

router.delete('/', (req, res) => {
  const id = req.body.id;
  userService.destroy(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

module.exports = router;