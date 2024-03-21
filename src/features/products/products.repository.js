import mongoose from "mongoose";
import { productSchema } from "./products.schema.js";

//Creating "Product" model
const productModel = mongoose.model('Product', productSchema);

//Function to get all products
export const getProductsRepo = async () => {
    const products = await productModel.find();
    console.log(products);
    return products.map(product => ({
        id: product._id,
        name: product.name,
        quantity: product.quantity
      }));;
};

//Function to create new product
export const createProductRepo = async (productData) => {
    const { name, quantity } = productData.product;
    const newProduct = new productModel({
        name,
        quantity
    });
    return await newProduct.save();
};

//Function to delete a product
export const deleteProductRepo = async (id) => {
    return await productModel.deleteOne({_id: id});
}

//Function to update product quantity
//To increment send positive number, to decrement send negative number
export const updateProductRepo = async(id, quantity) => {
    
    const updatedProduct = await productModel.findByIdAndUpdate(id, { quantity }, { new: true });
    if (!updatedProduct) {
      throw new Error('Product not found');
    }
    return updatedProduct;
};

