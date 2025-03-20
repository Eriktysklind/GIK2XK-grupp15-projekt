const db = require('../models');
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage
} = require('../helpers/responseHelper');
const validate = require('validate.js');

async function getCart() {
    try {
        const cart = await db.cart.findOne({
            where: { userId: userId },
            include: [{
                model: db.product, // Hämtar produkter direkt via relationen
            }]
        });
      /* Om allt blev bra, returnera allPosts */
       return createResponseSuccess(cart.map((cart) => _formatPost(cart)));
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }

  async function getAll() {
    try {
      const allUsers = await db.user.findAll();
      /* Om allt blev bra, returnera allPosts */
      return createResponseSuccess(allUsers);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }


module.exports = {
    getCart,
    getAll
  }; 