//Importing required dependencies
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { appLevelErrorHandlerMiddleware } from "./src/middlewares/errorHandler.js";
import { connectToDb } from "./src/config/db.config.js";
import productRouter from "./src/features/products/products.routes.js";

//Initializing express
const app = express();

app.use(cookieParser());
app.use(express.json());

//Using body parser to parse the request body
app.use(bodyParser.urlencoded({extended: true}));

//using routes
app.use('/products', productRouter);

//Error handling middleware
app.use(appLevelErrorHandlerMiddleware);

//Starting the server
app.listen(3000, async () => {
  await connectToDb();
  console.log(`API is live on http://localhost:3000/products`);
});