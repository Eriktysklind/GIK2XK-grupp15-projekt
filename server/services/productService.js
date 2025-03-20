const db = require('../models');
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage
} = require('../helpers/responseHelper');
const validate = require('validate.js');
const product = require('../models/product'); 

const constraints = {
    title: {
      length: {
        minimum: 2,
        maximum: 100,
        tooShort: '^Titeln måste vara minst %{count} tecken lång.',
        tooLong: '^Titeln får inte vara längre än %{count} tecken lång.'
      }
    }
  };

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

  async function create(product) {
    const invalidData = validate(product, constraints);
    if (invalidData) {
      return createResponseError(422, invalidData);
    }
    try {
      const newProduct = await db.product.create(product);
      //post tags är en array av namn
      //lägg till eventuella taggar
      
  
      return createResponseSuccess(newProduct);
    } catch (error) {
      return createResponseError(error.status, error.message);
    }
  }

   module.exports = {
    addToCart,
    getAll,
    getByTitle,
    create
  }; 