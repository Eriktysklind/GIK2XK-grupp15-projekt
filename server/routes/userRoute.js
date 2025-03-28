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

router.get('/:id/getCart/', (req, res) => {
    // BYgg denna funktion för att hämta alla produkter i varukorgen
  const cart = req.body;
  const id = req.params.id;

  userService.getCart(id, cart).then((result) => {
    res.status(result.status).json(result.data);
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  userService.getById(id).then((result) => {
    res.status(result.status).json(result.data);
  });
});

/* router.get('/', (req, res) => {
  db.user.findAll().then((result) => {
    res.send(result);
  });
}); */
//Båda get metoderna fungerar 
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

// Test för inloggnings funktionalitet som en alternativ lösning till varukorgen
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await db.user.findOne({ where: { email } });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: "Fel e-post eller lösenord" });
    }
    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Serverfel vid inloggning" });
  }
});

module.exports = router;