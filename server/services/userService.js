const db = require('../models');
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage
} = require('../helpers/responseHelper');
const validate = require('validate.js');

async function getCart(userId) {
    try {
        const cart = await db.cart.findOne({
            where: { userId: userId },
            include: [{
                model: db.product, // Hämtar produkter direkt via relationen
            }]
        });
       return createResponseSuccess(cart);
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

  async function getById(id) {
    try {
      const user = await db.user.findByPk(id);
      return createResponseSuccess(user);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }

    async function destroy(id) {
      if (!id) {
        return createResponseError(422, 'Id är obligatoriskt');
      }
      try {
        await db.user.destroy({
          where: { id: id }
        });
        return createResponseMessage(200, 'Användaren har raderades.');
      } catch (error) {
        return createResponseError(error.status, error.message);
      }
    }

module.exports = {
    getCart,
    getAll,
    getById,
    destroy
  }; 