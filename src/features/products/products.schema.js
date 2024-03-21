import mongoose from "mongoose";

//Creating product schema
export const productSchema = new mongoose.Schema({
    name: String,
    quantity: Number
});
