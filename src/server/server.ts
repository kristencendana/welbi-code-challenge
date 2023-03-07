import express, { Express, Request, Response, NextFunction } from 'express';
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());
import * as dotenv from 'dotenv'
dotenv.config()

// serve bundled dist folder
app.use(express.static("./dist"));

// server for production
module.exports = app.listen(port, () => {
  console.log(`Server is listening at port https://localhost:${port}`);
 });