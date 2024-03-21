import { customErrorHandler } from "../../middlewares/errorHandler.js";
import { getProductsRepo, createProductRepo, deleteProductRepo, updateProductRepo } from "./products.repository.js";

export const getProducts = async (req, res, next) => {
  try {
    const resp = await getProductsRepo();
    res.send(resp);
  } catch (err) {
        next(new customErrorHandler(400, err));
  }
};

export const createProduct = async (req, res, next) => {
  const productData = req.body;
  console.log(req.body);
  try {
    const newProduct = await createProductRepo(productData);
    if (newProduct) {
      res.send({product: newProduct});
    }
  } catch (err) {
        next(new customErrorHandler(400, err));
  }
};

export const deleteProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
      const resp = await deleteProductRepo(id);
      if (resp) res.send({message: "product deleted"});
    } catch (err) {
        next(new customErrorHandler(400, err));
    }
  };

  export const updateProduct = async (req, res, next) => {
    const id = req.params.id;
    const quantity = parseInt(req.query.number);
    console.log(id, quantity);
    try {
      const updatedProduct = await updateProductRepo(id, quantity);
      if (updatedProduct)   res.send({product: updatedProduct, message: 'updated successfully'});
    } catch (err) {
        next(new customErrorHandler(400, err));
    }
  };
