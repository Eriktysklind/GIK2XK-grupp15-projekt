const db = require('../models');
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage
} = require('../helpers/responseHelper');
const validate = require('validate.js');
const product = require('../models/product');

async function getByAuthor(userId) {
    try {
      const user = await db.user.findOne({ where: { id: userId } });
      const allCart = await user.getCarts({ include: [db.user, db.cart] });
      return createResponseSuccess(allCart.map((cart) => _formatPost(cart)));
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }

async function addToCart(userId, productId, amount) {
    try {
        const [cart] = await db.cart.findOrCreate({
            where: { userId: userId }, // Letar efter varukorg kopplad till userId
            defaults: { userId: userId } 
        });
        await db.cartRow.upsert({
            cartId: cart.id,
            productId: productId,
            amount: amount
        });

        return createResponseSuccess({cartId: cart.id, productId, amount});
    } catch (error) {
        return createResponseError(error.status, error.message);
      }  
}

async function getAll() {
    try {
      const allProducts = await db.product.findAll({ include: [db.product] });
      /* Om allt blev bra, returnera allPosts */
      return createResponseSuccess(allProducts.map((product) => _formatPost(product)));
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }

  async function getByTitle(productTitle) {
    try {
      const product = await db.product.findOne({ where: { title: productTitle } });
      const allProducts = await product.getProducts({ include: [db.product] });
      /* Om allt blev bra, returnera allPosts */
      return createResponseSuccess(allProducts.map((product) => _formatPost(product)));
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }

  module.exports = {
    getByAuthor,
    addToCart,
    getAll,
    getByTitle
  };