const db = require("../models");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");
const validate = require("validate.js");
const product = require("../models/product");

const constraints = {
  title: {
    length: {
      minimum: 2,
      maximum: 100,
      tooShort: "^Titeln måste vara minst %{count} tecken lång.",
      tooLong: "^Titeln får inte vara längre än %{count} tecken lång.",
    },
  },
};

async function addToCart(userId, productId, amount) {
  try {
    const [cart] = await db.cart.findOrCreate({
      where: { userId: userId },
      defaults: { userId: userId },
    });
    console.log("Cart hittad eller skapad:", cart.id);

    const result = await db.cartRow.upsert({
      cartId: cart.id,
      productId: productId,
      amount: amount,
    });
    console.log("Upsert-resultat:", result);

    return createResponseSuccess({ cartId: cart.id, productId, amount });
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getAll() {
  try {
    const allProducts = await db.product.findAll();

    return createResponseSuccess(allProducts);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getByTitle(productTitle) {
  try {
    const product = await db.product.findOne({
      where: { title: productTitle },
    });
    const allProducts = await product.getProducts({ include: [db.product] });
    return createResponseSuccess(
      allProducts.map((product) => _formatPost(product))
    );
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

async function getById(id) {
  try {
    const product = await db.product.findByPk(id);
    return createResponseSuccess(product);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function addRating(id, ratingData) {
  if (!id) {
    return createResponseError(422, "Id är obligatoriskt");
  }
  try {
    const newRating = await db.rating.create({
      rating: ratingData.rating,
      productId: id,
    });

    return createResponseSuccess(newRating);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function update(product, id) {
  try {
    const existingProduct = await db.product.findOne({ where: { id } });
    if (!existingProduct) {
      return createResponseError(404, "Hittade ingen product att uppdatera.");
    }
    await db.product.update(product, {
      where: { id },
    });
    return createResponseMessage(200, "Produkten uppdaterades.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroy(id) {
  if (!id) {
    return createResponseError(422, "Id är obligatoriskt");
  }
  try {
    await db.product.destroy({
      where: { id },
    });
    return createResponseMessage(200, "Produkten har raderades.");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function showRating(productId) {
  if (!productId) {
    return createResponseError(400, "Produkt-ID krävs");
  }

  try {
    const ratings = await db.rating.findAll({
      where: { product_id: productId },
    });

    return createResponseSuccess(ratings);
  } catch (error) {
    return createResponseError(500, error.message);
  }
}

module.exports = {
  addToCart,
  getAll,
  getByTitle,
  create,
  addRating,
  getById,
  update,
  destroy,
  showRating,
};
