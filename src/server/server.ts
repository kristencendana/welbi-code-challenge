import express, { Express, Request, Response, NextFunction } from 'express';
const path = require('path');
const app = express();
const port = 3000;
app.use(express.json());
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

// app.use(express.static("./dist"));
// console.log(path.join(__dirname, '../../index.html'));

// serves the CSS and JS files from dist folder
// app.use('/dist', express.static(path.join(__dirname, '../../dist')));
// app.use(express.static(path.join(__dirname, '../client')));

// serve bundled dist folder
app.use(express.static("./dist"));

// serving the HTML file
// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
// });

module.exports = app.listen(port, () => {
  console.log(`Server is listening at port https://localhost:${port}`);
 });